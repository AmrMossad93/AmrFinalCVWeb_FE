# Deploy to Hostinger VPS — amr-mossad.massar-tech.io

Target: **Hostinger VPS** (Ubuntu 24.04, bare Nginx) at **`69.62.118.127`**.
DNS for `massar-tech.io` is managed in **Hostinger hPanel**.

> This is a VPS, not shared hosting — you configure Nginx yourself. The
> `.htaccess` in the build is Apache-only and is ignored here; use the
> `nginx-amr-mossad.conf` server block instead.

---

## Step 1 — Point DNS (Hostinger hPanel)

1. hPanel → **Domains → DNS Manager** → select **massar-tech.io**.
2. **Add record:**
   - **Type:** `A`
   - **Name:** `amr-mossad`
   - **Points to:** `69.62.118.127`
   - **TTL:** 3600 (default)
3. Save. Verify (from your machine or the VPS terminal):
   ```bash
   ping amr-mossad.massar-tech.io   # should resolve to 69.62.118.127
   ```

---

## Step 2 — Upload the build to the VPS

Use **FileZilla over SFTP** (this VPS uses SSH, not classic FTP):

- **Protocol:** `SFTP - SSH File Transfer Protocol`
- **Host:** `69.62.118.127`  **Port:** `22`
- **User:** `root`  **Password:** your VPS root password (from hPanel → VPS Overview)

Steps:
1. On the server, create the web root: `/var/www/amr-mossad`
   (or create it via SSH: `mkdir -p /var/www/amr-mossad`).
2. Unzip `amr-mossad-site-deploy.zip` locally.
3. Upload the **contents** of the `browser/` folder into `/var/www/amr-mossad`
   so that `index.html` is at `/var/www/amr-mossad/index.html` (not nested).
4. Set ownership so Nginx can read it:
   ```bash
   chown -R www-data:www-data /var/www/amr-mossad
   ```

*(Alternative to FileZilla — upload straight from your Mac via scp:)*
```bash
scp -r dist/AmrWebsite/browser/* root@69.62.118.127:/var/www/amr-mossad/
```

---

## Step 3 — Create the Nginx server block

SSH in (`ssh root@69.62.118.127`) or use the **Terminal** button in hPanel.

```bash
nano /etc/nginx/sites-available/amr-mossad.massar-tech.io
```

Paste the contents of **`nginx-amr-mossad.conf`** (provided alongside this guide).
Save, then enable and reload:

```bash
ln -s /etc/nginx/sites-available/amr-mossad.massar-tech.io /etc/nginx/sites-enabled/
nginx -t            # must say "syntax is ok" / "test is successful"
systemctl reload nginx
```

At this point `http://amr-mossad.massar-tech.io` should load (HTTP only).

---

## Step 4 — Enable HTTPS (Let's Encrypt, free)

Do this **after** DNS from Step 1 resolves.

```bash
apt update
apt install -y certbot python3-certbot-nginx
certbot --nginx -d amr-mossad.massar-tech.io
```

- Choose to **redirect HTTP → HTTPS** when prompted.
- Certbot edits the server block for SSL and installs an auto-renewal timer.
- Test renewal: `certbot renew --dry-run`

---

## Step 5 — Verify

1. Visit **https://amr-mossad.massar-tech.io** — valid padlock, site loads.
2. Navigate to an inner page, then **refresh** — it should still load (confirms the
   `try_files ... /index.html` SPA fallback works). A 404 on refresh means the
   `location /` block is missing or misconfigured.

---

## Redeploying after code changes

```bash
npm run build:hostinger
# upload new contents of dist/AmrWebsite/browser/ to /var/www/amr-mossad
# (overwrite). No Nginx reload needed for content-only changes.
```

---

## Troubleshooting

| Symptom | Fix |
|---|---|
| `502`/`403` or "welcome to nginx" | Check `root` path in the server block and that files are in `/var/www/amr-mossad`. Run `chown -R www-data:www-data /var/www/amr-mossad`. |
| 404 on refreshing an inner route | `try_files $uri $uri/ /index.html;` missing in the `location /` block. |
| `nginx -t` fails | Re-check the pasted config; ensure the symlink in `sites-enabled` points to the right file. |
| Certbot "challenge failed" | DNS hasn't propagated yet, or port 80 blocked. Confirm `ping` resolves and the Hostinger firewall allows 80/443. |
| Site loads but assets 404 | Build base-href must be `/` (it is, via `npm run build:hostinger`). Re-upload contents, not a nested folder. |

---

## Files in this project for deployment

- `amr-mossad-site-deploy.zip` — the built site (upload its `browser/` contents).
- `nginx-amr-mossad.conf` — the Nginx server block to paste in Step 3.
- `package.json` → `build:hostinger` script (base-href `/`).
- `angular.json` → `hostinger` build configuration.

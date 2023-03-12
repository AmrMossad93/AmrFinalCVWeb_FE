export interface IHeader {
  name: string;
  profileImage: string;
  position: string;
  socialLinks: IHeaderSocialLinks[];
  cvPath: string;
}

export interface IHeaderSocialLinks {
  fontAwesomeIcon: string;
  link: string;
}

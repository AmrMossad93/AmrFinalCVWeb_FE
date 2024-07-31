export interface IHeader {
  name: string;
  profileImage: string;
  positions: string[];
  socialLinks: IHeaderSocialLinks[];
  cvPath: string;
}

export interface IHeaderSocialLinks {
  fontAwesomeIcon: string;
  link: string;
}

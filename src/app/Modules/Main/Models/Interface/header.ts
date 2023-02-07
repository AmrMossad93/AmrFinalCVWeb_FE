export interface IHeader {
  name: string;
  profileImage: string;
  position: string;
  socialLinks: IHeaderSocialLinks[];
}

export interface IHeaderSocialLinks {
  fontAwesomeIcon: string;
  link: string;
}

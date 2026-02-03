export interface IHeader {
  name: string
  profileImage: string
  positions: string[]
  socialLinks: ISocialLink[]
  cvPath: string
  brief: string
}

export interface ISocialLink {
  fontAwesomeIcon: string
  link: string
}

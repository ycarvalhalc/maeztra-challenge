export type menuProps = {
  title: string
  links: linkProps[]
  id: number
}

export type linkProps = {
  text: string,
  href: string
  id: number
}
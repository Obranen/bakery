import { SVGProps } from 'react'

const MenuSVG = (props: SVGProps<SVGElement>) => {
  return (
    // @ts-ignore
    <svg viewBox='0 0 22 19' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M1.4549 2.85001V4.75001H20.3549V2.85001H1.4549ZM1.4549 10.45H20.3549V8.55001H1.4549V10.45ZM1.4549 16.15H20.3549V14.25H1.4549V16.15Z' />
    </svg>
  )
}

export default MenuSVG

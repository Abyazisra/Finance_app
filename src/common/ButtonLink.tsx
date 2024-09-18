

export interface ButtonLinkProps {
    href:string;
    children?: React.ReactNode;
    className?: string;
    target?: string;
    logo?:string;
    upperText?:string;
    lowerText?: string;
    
}

export function ButtonLink({href, children, className, target}: ButtonLinkProps) {
  return (
    
       <a 
        href={href} 
        target={target} 
        className={className} 
        children={children}></a>
    
  )
}

export default ButtonLink


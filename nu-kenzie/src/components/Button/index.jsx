import './style.css'

export const Button = ({name, className, onClick, children}) => {
  
    return(
        <button className={className} onClick={onClick}>{name} {children} </button> 
    )
}
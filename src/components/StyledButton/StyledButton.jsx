import './style.css'

export default function StyledButton({...props}){
    return(
        <a href={props.url || '#'} target={'_blank'} >{props.title}</a>
    )
}
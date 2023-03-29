

const Images=(props)=>{
    return(
        <div>
            {props.src}
            <img src={props.src} alt={props.alt}/>
        </div>
    )
}

export default Images;
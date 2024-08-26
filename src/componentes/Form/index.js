import './index.css'

const CampoInput = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    return (
        <div className='campo'>
            <label>{props.label}</label>
            <input required={props.obrigatorio} type='text' placeholder={placeholderModificada}></input>
        </div>
    )
}


export default CampoInput
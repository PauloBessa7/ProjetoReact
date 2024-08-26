import './index.css'

const CampoInput = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    const aoDigitado = (evento) =>  {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className='campo'>
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} type='text' placeholder={placeholderModificada}></input>
        </div>
    )
}


export default CampoInput
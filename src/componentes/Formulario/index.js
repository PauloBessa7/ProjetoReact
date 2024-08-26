import CampoInput from '../Form'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import Botao from '../Botao'

const Formulario = () => {

    const times = [
        'Valorant',
        'DangeonBorne',
        'DeepRock'
    ]

    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados do jogador</h2>
                <CampoInput label='Nome' placeholder="Digite seu nome"></CampoInput>
                <CampoInput label='Cargo' placeholder="Digite seu cargo"></CampoInput>
                <CampoInput label='Imagem' placeholder="Digite o endereço da imagem"></CampoInput>
                <ListaSuspensa itens={times} label='Time'></ListaSuspensa>
                <Botao texto='Registrar'></Botao>
            </form>
        </section>
    )
}


export default Formulario
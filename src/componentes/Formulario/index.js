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

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log(evento)
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados do jogador</h2>
                <CampoInput obrigatorio={true} label='Nome' placeholder="Digite seu nome"></CampoInput>
                <CampoInput obrigatorio={true} label='Cargo' placeholder="Digite seu cargo"></CampoInput>
                <CampoInput obrigatorio={true} label='Imagem' placeholder="Digite o endereço da imagem"></CampoInput>
                <ListaSuspensa obrigatorio={true}  itens={times} label='Time'></ListaSuspensa>
                <Botao texto='Criar Card'>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}


export default Formulario
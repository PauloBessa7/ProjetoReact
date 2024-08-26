import CampoInput from '../Form'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import Botao from '../Botao'
import {useState} from 'react'

const Formulario = () => {

    const times = [
        'Valorant',
        'DangeonBorne',
        'DeepRock'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState(times[0])

    function aoSalvar(evento) {
        evento.preventDefault()
        console.log(nome,cargo,imagem,time)
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados do jogador</h2>
                <CampoInput 
                    obrigatorio={true} 
                    label='Nome' 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    placeholder="Digite seu nome">
                </CampoInput>
                <CampoInput 
                    obrigatorio={true} 
                    label='Cargo' 
                    cargo={cargo}
                    aoAlterado={cargo => setCargo(cargo)}
                    placeholder="Digite seu cargo">
                </CampoInput>
                <CampoInput 
                    obrigatorio={true} 
                    label='Imagem' 
                    imagem={imagem}
                    aoAlterado={imagem => setImagem(imagem)}
                    placeholder="Digite o endereço da imagem">
                </CampoInput>
                <ListaSuspensa 
                    obrigatorio={true}  
                    itens={times} 
                    time={time}
                    aoAlterado={time=> setTime(time)}
                    label='Time'>
                </ListaSuspensa>
                <Botao texto='Criar Card'>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}


export default Formulario
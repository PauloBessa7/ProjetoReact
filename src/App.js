import Banner from './componentes/Banner/Banner';
import CampoInput from './componentes/Form'


function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <CampoInput label='Nome' placeholder="Digite seu nome"></CampoInput>
      <CampoInput label='Cargo' placeholder="Digite seu cargo"></CampoInput>
      <CampoInput label='Imagem' placeholder="Digite o endereço da imagem"></CampoInput>
    </div>
  );
}

export default App;

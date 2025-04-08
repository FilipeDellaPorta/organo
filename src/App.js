import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColoboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador])
  };

  return (
    <div className='App'>
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColoboradorAdicionado(colaborador)
        }
      />
    </div>
  );
}

export default App;

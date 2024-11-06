import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'
import ShowDetails from './Componentes/showDetails';

function App() {

  const [dados,setDados] = useState({});
  const [coin,setCoin] = useState({});
  const [optionCoin, setOptionCoin] = useState({});

  const apiSearchPriceCoin = async () =>{

    const res = await axios.get(`https://www.mercadobitcoin.net/api/${coin}/ticker/`);
    if(res!=null){
      setDados(res.data);
      
      console.table(dados);
    }else{
      console.log("problema ao receber objeto da API mercadoBitcoin");
    }
  }

  const apiListCrypto = async () => {
    
    const res = await axios.get(`https://brapi.dev/api/v2/crypto/available`);
    if(res != null){
      setOptionCoin(res.data);
      console.log(res.data);
    }else{
      console.log("problema ao receber objeto da API brapi")
    }
  }

  useEffect(()=>{
      apiListCrypto();
  },[])

  const handleOptionCoin = (event) =>{
    setCoin(event.target.value);  
    console.log(event.target.value);
  }


  return (
    <main>
      <h1>Saiba a contação da sua moeda favorita</h1>
      <section>
        <select name="" id="" onChange={handleOptionCoin}>
            { optionCoin.coins && optionCoin.coins.map((coin,index)=>(
                <option value={coin} key={index}>{coin}</option>
            ))}
        </select>
        <button onClick={apiSearchPriceCoin}>procurar</button>
        { dados.ticker && 
        <ShowDetails dados={dados}></ShowDetails>}
        
      </section>
    </main>
  )
}

export default App;

import Card from '../components/card/Card'
import { useEffect, useContext } from "react";
import {ApiKey, AxioApi} from '../Api';
import { ApiContext } from '../context/ApiContext';

const Home = () => {

  const { category, list, setList } = useContext(ApiContext);

  
  useEffect(() => {
    (async () => {
      const { data } = await AxioApi.get(`/${category}.json?api-key=${ApiKey}`)
      setList(data.results);
    })()
  }, [])
  
  console.log(list)

  return (
    <div className='body'>
      <h1 className='title'>Página Inicial</h1>
      <section>
        <Card />
      </section>
    </div>
  )
}

export default Home;

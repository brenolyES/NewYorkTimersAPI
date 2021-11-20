import Card from '../components/card/Card'
import { useEffect, useContext } from "react";
import { ApiKey, AxioApi } from '../Api';
import { ApiContext } from '../context/ApiContext';
import '../pages/Global.css'
import Loading from '../components/loading/Loading';

const Politics = () => {

  const { list, setList, loading, setLoading, setActiveLink } = useContext(ApiContext);
  const category = 'politics'

  useEffect(() => {
    setLoading(true);
    (async () => {
      const { data } = await AxioApi.get(`/${category}.json?api-key=${ApiKey}`)
      setList(data.results);
      setLoading(false);
      setActiveLink('politics')
    })()
  }, [])

  return (
    <div className='body'>
      <h1 className='title'>Política</h1>
      {loading ? <Loading/> : 
       <section>
       {
         list.length ? list.map((e, index) => {
           return (
             e.title ?
               <Card
                 key={index}
                 title={e.title}
                 byline={e.byline}
                 abstract={e.abstract}
                 imgTitle={e.multimedia && e.multimedia[0].copyright}
                 url={e.multimedia && e.multimedia[0].url}
               /> : null
           );
         })
           : <div>Sem Noticias</div>
       }
     </section>
      }
    </div>
  )
}

export default Politics;

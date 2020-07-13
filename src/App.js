import React, {useState , useEffect} from 'react';
import styles from './App.module.css';
import Cards from './Components/Cards/Cards';
import {Chart} from './Components/Charts/Charts';
import {fetchData} from './api'

function App() {

  const [data, setData] = useState({});

  useEffect(()=>{
    async function getData(){
      const dataFetched = await fetchData();
      setData(dataFetched);
      // console.log(fetchedData)
    }
    getData();
  }, [])
  // console.log(data)
  return (
    <div className={styles.App}>
      <Cards data={data} />
      {/* <Chart/> */}
    </div>
  );
}

export default App;

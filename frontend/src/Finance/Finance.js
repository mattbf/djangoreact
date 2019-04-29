import  React, {useState, useEffect} from  'react';
import { BrowserRouter } from  'react-router-dom'
import { Route, Link } from  'react-router-dom'
import FinanceAPI from './FinanceAPI.js';

function Finance() {
  const [symbol, setSymbol] = useState('')
  const [search, setSearch] = useState('')
  const {res, setRes, doGet, getTimeSeries} = FinanceAPI()
  const [timeSeries, setTimeSeries] = useState([])

  useEffect(() => {
    doGet({
      method: "GET",
      url: 'https://www.alphavantage.co/query',
      params: {
        function: 'TIME_SERIES_MONTHLY',
        symbol: 'MSFT',
        apikey: 'B62IP93O6OGM4LCA',
      }
    })
  }, []) // change to search

  function changeSearch(event) {
    setSearch(event.target.value)
  }

  return (
    <div>
      <input type="TextField" onChange={changeSearch}/>
      <ul>
        {res.isError ? "error loading data" :
          res.isLoading ? "loading..." :
          console.log(res)

        }

      </ul>
    </div>
  )
}

export default Finance

/*
res.data.map( (x,index) =>
  <li key={index}> Close: {x.close} </li>
)
*/

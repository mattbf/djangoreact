import React, {useState, useEffect} from 'react';
import CustomersAPIv2 from './CustomersAPIv2.js';

function APIUI() {
  const { res, UnlimitedAPI, loadData, customVar } = CustomersAPIv2()
  const[data, setData] = useState([])

  function handleClick() {
    UnlimitedAPI({
      method: "GET",
      url: 'http://localhost:8000/api/customers/1',
      params: {
        pk: 1,
      },
    })
  }

  useEffect(() => {
    loadData().then(function (response) {
      setData(response.data)
    })
  }, [])

  console.log(res)

  return(
    <div style={{display: 'flex',}}>
    <div style={{border: 'solid',}}>
      <h6> Case: loading and error handling </h6>
        {res.isLoading ? "loading..."
          :
          <div> {data.first_name} </div>
        }
    </div>
      <div style={{border: 'solid',}}>
        <h6> Case: Programmatic </h6>
          {res.isLoading ? "loading..."
            :
            <div> {res.data.first_name} </div>
          }
      </div>
      <div style={{border: 'solid',}}>
        <h6> Case: Custom Variables </h6>
        {customVar}
      </div>
      <button onClick={(e) => handleClick()}> Click </button>
    </div>
  )
}

export default APIUI

/*

{res.data.map((item) =>
  <div key={item.pk}> {item.first_name} </div>
)}


{res.isLoading ? "loading..."
  :
  <div> {res.data.first_name} </div>
}

*/

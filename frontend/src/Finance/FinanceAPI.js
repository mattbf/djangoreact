import React, {useEffect, useState} from 'react';
import axios from 'axios';
const API_URL = 'http://localhost:8000';


function FinanceAPI() {
  const [res, setRes] = useState({
    isLoading: false,
    isError: false,
    data: []
  })

  function doGet(req) {
    setRes({
      isLoading: true,
      isError: false,
      data: []
    })
    return axios(req)
    .then(function (response) {
      setRes({
        isLoading: false,
        isError: false,
        data: response.data["Monthly Time Series"],
      })
      console.log(response)
    })
    .catch(function (error) {
      setRes({
        isLoading: false,
        isError: true,
        data: [],
      })
      console.log(error);
    })
  }

  function getTimeSeries(req) {
    setRes({
      isLoading: true,
      isError: false,
      data: []
    })
    return axios(req).then(response => response.data)
  }

  return { res, setRes, doGet, getTimeSeries}
}

export default FinanceAPI

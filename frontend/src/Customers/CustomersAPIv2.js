import React, {useEffect, useState} from 'react';
import axios from 'axios';
const API_URL = 'http://localhost:8000';

function CustomersAPIv2() {
  const [res, setRes] = useState({
    isLoading: false,
    isError: false,
    data: []
  })
  const [customVar, setCustomVar] = useState("not set")

    function UnlimitedAPI(req) {
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
            data: response.data,
          })
          setCustomVar("set")
        })
        .catch(function (error) {
          // handle error
          //console.log(error);
          //return {customVar, error}
        })
    }

    function loadData() {
      const url = `${API_URL}/api/customers/`;
      return axios.get(url).then(response => response.data);
    }

    const NewCall = (pk) => {

    }

  return {res, UnlimitedAPI, loadData, customVar}
}

export default CustomersAPIv2

import axios from 'axios';
const API_URL = 'http://localhost:8000';

const CustomersAPI = {

    getCustomers: function() {
        const url = `${API_URL}/api/customers/`;
        return axios.get(url).then(response => response.data);
    },
    getCustomersByURL: function(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    },
    getCustomer: function(pk) {
        const url = `${API_URL}/api/customers/${pk}`;
        return axios.get(url).then(response => response.data);
    },
    deleteCustomer: function(customer){
        const url = `${API_URL}/api/customers/${customer.pk}`;
        return axios.delete(url);
    },
    createCustomer: function(customer){
        const url = `${API_URL}/api/customers/`;
        return axios.post(url,customer);
    },
    updateCustomer: function(customer){
        console.log(customer)
        const url = `${API_URL}/api/customers/${customer.pk}`;
        return axios.put(url,customer);
    },
    superAPI: function(pk){

        const url = `${API_URL}/api/customers/${pk}`;
        return axios.get(url)
          .then(function (response) {
            // handle success
            console.log(response);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
    },
}

export default CustomersAPI

import React, {useState, useEffect} from 'react';
import  CustomersAPI  from  './CustomersAPI';
//const  customersAPI = CustomersAPI();


function CustomersList() {

    const [customers, setCustomers] = useState([])
    const [urlLink, setUrlLink] = useState('')

    useEffect(() => {

      CustomersAPI.getCustomers().then(function (result) {
          setCustomers(result.data)
          setUrlLink(result.nextlink)
      });
    }, [])

    function handleDelete(e,pk) {
        CustomersAPI.deleteCustomer({pk :  pk}).then(()=>{
            var  newArr = customers.filter(function(obj) {
                return  obj.pk  !==  pk;
            });
            setCustomers(newArr)
        });
    }

  function nextPage() {
    CustomersAPI.getCustomersByURL(urlLink).then((result) => {
        setCustomers(result.data)
        setUrlLink(result.nextlink)
    });
  }

    return (
    <div  className="customers--list">
        <table  className="table">
            <thead  key="thead">
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Address</th>
                <th>Description</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                {customers.map( c  =>
                <tr  key={c.pk}>
                    <td>{c.pk}  </td>
                    <td>{c.first_name}</td>
                    <td>{c.last_name}</td>
                    <td>{c.phone}</td>
                    <td>{c.email}</td>
                    <td>{c.address}</td>
                    <td>{c.description}</td>
                    <td>
                    <button  onClick={(e)=> handleDelete(e,c.pk) }> Delete</button>
                    <a  href={"/customer/" + c.pk}> Update</a>
                    </td>
                </tr>)}
            </tbody>
        </table>
        <button  className="btn btn-primary"  onClick=  { nextPage  }>Next</button>
    </div>
    );

}
export  default  CustomersList;

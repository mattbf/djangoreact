import React, {useState, useEffect} from 'react';
import  CustomersAPI  from  './CustomersAPI';

const  customersAPI  =  new  CustomersAPI();

function UpdateCustomers({match}) {
    const [values, setValues] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      description: "",
    })

    useEffect(() => {
      if(match.params && match.params.pk)
      {
            customersAPI.getCustomer(match.params.pk).then((c)=> {
              setValues({
                firstName: c.first_name,
                lastName: c.last_name,
                email: c.email,
                phone: c.phone,
                address: c.address,
                description: c.description,
              })
            })
        }
    }, [])

    const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value });
    };

    // handleCreate(){
    // customersAPI.createCustomer(
    //     {
    //     "first_name":  this.refs.firstName.value,
    //     "last_name":  this.refs.lastName.value,
    //     "email":  this.refs.email.value,
    //     "phone":  this.refs.phone.value,
    //     "address":  this.refs.address.value,
    //     "description":  this.refs.description.value
    //     }).then((result)=>{
    //             alert("Customer created!");
    //     }).catch((error)=>{
    //             alert('There was an error! Please re-check your form.' + error);
    //
    //     });
    // }

    function handleCreate() {
      console.log("handle create called")
      customersAPI.createCustomer({
        "first_name":  values.firstName,
        "last_name":  values.lastName,
        "email":  values.email,
        "phone":  values.phone,
        "address":  values.address,
        "description":  values.description,
      }).then((result) => {
          alert("Customer created!!")
      }).catch((error)=>{
          alert('There was an error! Please re-check your form.' + error);
      });
    }

    function handleUpdate(pk){
    customersAPI.updateCustomer(
    {
    "pk":  pk,
    "first_name":  values.firstName,
    "last_name":  values.lastName,
    "email":  values.email,
    "phone":  values.phone,
    "address":  values.address,
    "description":  values.description
    }
    ).then((result)=>{
        alert("Customer updated!");
    }).catch(()=>{
        alert('There was an error! Please re-check your form.');
    });
  }

  function handleSubmit(event) {
    if(match.params  &&  match.params.pk){
      handleUpdate(match.params.pk);
    }
    else
    {
      handleCreate();
    }
    event.preventDefault();
  }
        return (
          <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              First Name:</label>
              <input className="form-control" type="text"
                value={values.firstName}
                onChange={handleChange('firstName')}
               />

            <label>
              Last Name:</label>
              <input className="form-control" type="text"
                value={values.lastName}
                onChange={handleChange('lastName')}
              />

            <label>
              Phone:</label>
              <input className="form-control" type="text"
                value={values.phone}
                onChange={handleChange('phone')}
              />

            <label>
              Email:</label>
              <input className="form-control" type="text"
                value={values.email}
                onChange={handleChange('email')}
              />

            <label>
              Address:</label>
              <input className="form-control" type="text"
                value={values.address}
                onChange={handleChange('address')}
              />

            <label>
              Description:</label>
              <textarea className="form-control"
                value={values.description}
                onChange={handleChange('description')}
              ></textarea>


            <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
          </form>
        );

}
export default UpdateCustomers;

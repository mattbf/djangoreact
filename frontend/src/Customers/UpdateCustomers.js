import React, {useState, useEffect} from 'react';
import  CustomersAPI  from  './CustomersAPI';

const  customersAPI  =  new  CustomersAPI();

function UpdateCustomers({match}) {
    const [values, setValues] = useState({
      firstName: "Test Name",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      description: "",
    })

    useEffect(() => {
      if(match.params && match.params.pk)
      {
        console.log("params true")
      }
    })

    const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value });
    };



  //   componentDidMount(){
  //   const { match: { params } } =  this.props;
  //   if(params  &&  params.pk)
  //   {
  //       customersAPI.getCustomer(params.pk).then((c)=>{
  //           this.refs.firstName.value  =  c.first_name;
  //           this.refs.lastName.value  =  c.last_name;
  //           this.refs.email.value  =  c.email;
  //           this.refs.phone.value  =  c.phone;
  //           this.refs.address.value  =  c.address;
  //           this.refs.description.value  =  c.description;
  //       })
  //   }
  // }

  //   handleCreate(){
  //   customersAPI.createCustomer(
  //       {
  //       "first_name":  this.refs.firstName.value,
  //       "last_name":  this.refs.lastName.value,
  //       "email":  this.refs.email.value,
  //       "phone":  this.refs.phone.value,
  //       "address":  this.refs.address.value,
  //       "description":  this.refs.description.value
  //       }).then((result)=>{
  //               alert("Customer created!");
  //       }).catch((error)=>{
  //               alert('There was an error! Please re-check your form.' + error);
  //
  //       });
  //   }
  //
  //   handleUpdate(pk){
  //   customersAPI.updateCustomer(
  //   {
  //   "pk":  pk,
  //   "first_name":  this.refs.firstName.value,
  //   "last_name":  this.refs.lastName.value,
  //   "email":  this.refs.email.value,
  //   "phone":  this.refs.phone.value,
  //   "address":  this.refs.address.value,
  //   "description":  this.refs.description.value
  //   }
  //   ).then((result)=>{
  //
  //       alert("Customer updated!");
  //   }).catch(()=>{
  //       alert('There was an error! Please re-check your form.');
  //   });
  // }
  //
  //   handleSubmit(event) {
  //   const { match: { params } } =  this.props;
  //   if(params  &&  params.pk){
  //       this.handleUpdate(params.pk);
  //   }
  //   else
  //   {
  //       this.handleCreate();
  //   }
  //   event.preventDefault();
  // }
  //
  // handleSubmit() {
  //   const { match: { params } } =  props;
  //   if(params  &&  params.pk){
  //     handleUpdate(params.pk);
  //   }
  //   else
  //   {
  //     handleCreate();
  //   }
  //   event.preventDefault();
  // }
        return (
          <form>
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

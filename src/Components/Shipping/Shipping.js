import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import "./Shipping.css"

const Shipping = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {user} = useAuth();
    const onSubmit = data =>{ console.log(data)};
  
    return (
        <div>
            
      <form className = "shipping-form" onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue={user.displayName} {...register("name")} />
      <input defaultValue ={user.email} {...register("email", { required: true })} />
      {errors.email && <span className = "error">This field is required</span>}
      <input placeholder="City" defaultValue="" {...register("City")} />
      <input placeholder="Address" defaultValue="" {...register("Address")} />
      <input placeholder="Phone No" defaultValue="" {...register("Phone")} />
      
      <input type="submit" />
    </form>


        </div>
    );
};

export default Shipping;
import React from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { getDatabase, ref, set } from "firebase/database";
import app from '../FirebaseConfig/firebase';

export default function EnquiryForm() {

  const submitHandler = (event) => {
    event.preventDefault();
    
    const contact = {
      first_name : event.target.first_name.value,
      last_name : event.target.last_name.value,
      email : event.target.email.value,
      mobile_number : event.target.mobile_number.value,
      message : event.target.message.value,
    }

    const db = getDatabase(app);
    set(ref(db, 'contact_enquiries/' + Date.now()), contact);

    event.target.reset();
    toast.success("Submitted !!")
  }

  return (
    <>
    <ToastContainer/>
       <div className="container mx-auto my-20 w-1/3 border border-purple-500 bg-white">
        <div className='p-5 space-y-5 shadow-xl'>
          <h4 className='text-center text-3xl font-semibold'>Contact Us</h4>

          <form onSubmit={ submitHandler } autoComplete='off'>
            <div className="grid grid-cols-2 gap-5">
              <input 
              type="text"
              name='first_name'
              className='border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500'
              placeholder='First Name'
              />
              <input 
              type="text"
              name='last_name'
              className='border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500'
              placeholder='Last Name'
              />
              <input 
              type="email"
              name='email'
              className='border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2'
              placeholder='Email'
              />
              <input 
              type="tel"
              name='mobile_number'
              className='border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2'
              placeholder='Mobile Number'
              />
              <textarea
              cols="10"
              rows="3"
              name='message'
              className='border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2'
              placeholder='Write Your Message...'
              ></textarea>
            </div>

            <input 
            type="submit" 
            value="Send Message"
            className='focus:outline-none mt-[30px] bg-purple-500 px-4 py-2 text-white w-full font-semibold rounded cursor-pointer duration-[0.5s] hover:bg-[#40b0fa]'
            />

          </form>
        </div>
       </div>
    </>
  )
}

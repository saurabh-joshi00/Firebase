import React from 'react'
import EnquiryForm from './EnquiryForm';
import useTitle from './useTitle';

export default function Home() {

  useTitle("Form Handler");

  return (
    <>        
      <EnquiryForm/>  
    </>
  )
}



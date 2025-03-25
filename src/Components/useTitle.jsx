import React, { useEffect } from 'react'

export default function useTitle(title) {

  //Dynamically title changing  
  useEffect( () => {
    document.title = `Firebase | ${title}`;
  }, []);
  
  return(
    <>
      
    </>
  )
}

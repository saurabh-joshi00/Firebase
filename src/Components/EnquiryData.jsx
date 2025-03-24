import React, { useContext, useEffect, useState } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";
import app from '../FirebaseConfig/firebase';
import { CartContext } from '../MainContext/Context';
import { useNavigate } from 'react-router-dom';

export default function EnquiryData() {
  //firebase relatime database
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    const db = getDatabase(app);
    const starCountRef = ref(db, 'contact_enquiries/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      var finalData = [];
      
      for(var v in data){
        finalData.push(data[v]);
      }
      // console.log(finalData);
      setContactData(finalData);

      // updateStarCount(postElement, data);  
    });
  },[])

  //redirecting to login page if user is not logged-in
  let {isLogin} = useContext(CartContext);

  const navigate = useNavigate();

  useEffect(() => {
    if(isLogin === false){
      navigate('/login');
    }
  },[isLogin]);

  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div>
            <h2 className='text-2xl text-center font-semibold leading-tight'>Enquiry Data</h2>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">

              <table className='min-w-full leading-normal'>
                <thead>
                      <tr>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Name
                        </th>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Email
                        </th>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Mobile Number
                        </th>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Message
                        </th>
                      </tr>
                </thead>

                <tbody>

                  {
                    contactData.map((v, i) => {
                      return(
                        <tr>
                          <td className='px-5 py-3 border-b border-gray-200 bg-white text-sm'>
                            <p className='text-gray-900 whitespace-no-wrap'>
                              { v.first_name+' '+v.last_name } 
                            </p>
                          </td>

                          <td className='px-5 py-3 border-b border-gray-200 bg-white text-sm'>
                            <p className='text-gray-900 whitespace-no-wrap'>
                              { v.email }
                            </p>
                          </td>

                          <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              { v.mobile_number }
                            </p>
                          </td>

                          <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              { v.message }
                            </p>
                          </td>
                        </tr>
                      )
                    })
                  }

                  
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

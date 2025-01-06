import React from 'react'
import Schemes from './Schemes'
import SearchBar from './SearchBar'
import  { useState, useEffect } from 'react';



function FieldSchemes() {
    const [schem, setSchem] = useState([]);
    useEffect(() => {
        // fetch('/scheme')///ye wala part dekh lena end point banaya hai but kaam nai kar ra

        fetch("/json/data.json")
  .then(response => {
    // console.log("sdasd")
    if (!response.ok) {
      if (response.status === 404) throw new Error('User not found');
      if (response.status === 500) throw new Error('Server error');
    }
    return response.json();
  })
  .then(data => {console.log(data.schemes);
    setSchem(data.schemes);
  })
  .catch(error => console.error(error));
      }, []);
     
    

  return (
   <>
   <div className='mt-10'></div>
   <SearchBar/><div className=' text-left'>
    <div className='text-xl font-semibold m-3'>All Schemes</div>

<div className='flex flex-col '>
{schem.map((scheme, index) => (
  <Schemes
    key={index}
    schemetitle={scheme.name}
    schemecategory={scheme.ministry || scheme.state}
    schemedescription={scheme.description}
  />
))}
      
 

</div>
   </div>
   <div className='mb-10'></div>



   
   
   </>   
    )
}

export default FieldSchemes

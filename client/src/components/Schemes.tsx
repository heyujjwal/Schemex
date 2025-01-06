import React from 'react'

function Schemes(props) {
  return (
    <div className="min-w-lg max-w-4xl flex flex-col bg-white text-sm p-6 m-3 mt-0 rounded-lg shadow-md ">
        <p className="text-xl text-bold "> {props.schemetitle}</p>
        <p className="text-base  text-gray-500"> {props.schemecategory} </p>
        <p className="text-md font-thin text-gray-800 "> {props.schemedescription} </p>
    </div>
  )
}

export default Schemes

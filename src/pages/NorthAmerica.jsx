import React from 'react'
import Countries from '../components/Countries';
import Header from '../components/Header';
const NorthAmerica = () => {
  return (
   <>
   <Header/>
    <Countries props={"subregion/north%20america"}/>
   </>
  )
}

export default NorthAmerica
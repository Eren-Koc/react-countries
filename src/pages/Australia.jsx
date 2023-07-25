import React from 'react'
import Countries from '../components/Countries';
import Header from '../components/Header';

const Australia = () => {
  return (
    <>
    <Header/>
    <Countries props={"region/Oceania"}/>
    </>
  )
}

export default Australia
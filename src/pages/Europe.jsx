import React from 'react'
import Countries from '../components/Countries';
import Header from '../components/Header';
const Europe = () => {
  return (
    <>
    <Header/>
    <Countries props={"region/europe"}/>
    </>
  )
}

export default Europe
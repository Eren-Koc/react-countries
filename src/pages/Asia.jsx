import React from 'react'
import Countries from '../components/Countries';
import Header from '../components/Header';
const Asia = () => {
  return (
    <>
    <Header/>
    <Countries props={"region/asia"}/>
    </>
  )
}

export default Asia
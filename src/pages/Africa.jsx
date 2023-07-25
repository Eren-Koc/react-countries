import React from 'react'
import Countries from '../components/Countries';
import Header from '../components/Header';
const Africa = () => {
  return (
    <>
    <Header/>
    <Countries props={"region/africa"}/>
    </>
  )
}

export default Africa
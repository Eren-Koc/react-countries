import React from 'react'
import Countries from '../components/Countries';
import Header from '../components/Header';

const All = () => {
  return (
    <>
    <Header/>
    <Countries props={"all"}/>
    </>
  )
}

export default All
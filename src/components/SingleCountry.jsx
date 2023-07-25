import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {BsFlagFill} from 'react-icons/bs';
import {MdCastle} from 'react-icons/md';
import {FaUsers} from 'react-icons/fa';

//https://restcountries.com/v3.1/region/asia


const SingleCountry = ({country}) => {


  const NumberDots = (number) =>{
    
    
    var digits = number.toString().split('');
    var realDigits = digits.map(Number);
    var ArrayLenght = Object.keys(realDigits);
    let numberString="";
    var count=0;

    for(let i=ArrayLenght.length;i>0;i--){
      
      count++;
      numberString+=realDigits[i-1];

      if(count===3 && i!==1){
        numberString+=".";
        count=0;
      }

    }
let response = numberString.split("").reverse().join("");
return response;
  }

  return (
    
  
      <div className=' relative bg-white single-country flex flex-col shadow-md w-[250px] min-h-[270px] h-fit rounded-lg'>     
      <span className='region p-1 px-2 absolute top-3 text-sm right-3 rounded-lg z-30 bg-blue-500 font shadow-sm'>{country.continents}</span>
        <img src={country.flags.png} className='shadow-md relative rounded-t-lg object-fill w-full h-[170px]'></img>   
        <div className='flex flex-col w-fit h-fit p-2'>
          <span className='country-name my-1 text-black font-medium text-base text-left flex flex-row justify-start items-center'>
            <BsFlagFill className='text-blue-500 mr-2 w-4 h-auto' title='Country Name'/>
            
            {country.name.common}
            </span>
          <span className='country-capital text-black my-1 font-medium text-base text-left flex flex-row justify-start items-center'>
            <MdCastle className='text-blue-500 mr-2 w-4 h-auto' title='Country Capital'/>
             {country.capital}
            </span>

            <span className='country-population text-black my-1 font-medium text-base text-left flex flex-row justify-start items-center'>
            <FaUsers className='text-blue-500 mr-2 w-4 h-auto' title='Country Population'/>
             {NumberDots(country.population)}
            </span>
        </div>
      </div>
    
    

  )
}

export default SingleCountry
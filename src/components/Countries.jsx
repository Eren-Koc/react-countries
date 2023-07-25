import axios from 'axios';
import React , {useEffect,useState} from 'react'
import SingleCountry from './SingleCountry';
import {MdKeyboardDoubleArrowRight,MdKeyboardDoubleArrowLeft} from 'react-icons/md';
const Countries = ({props}) => {

    const [Countries,setCountries] = useState([]);
    const [Pagination,setPagination] = useState(0);
    const [ResponseLength,setResponseLength] = useState(0);
    const PaginationChanged=(value)=>{
         
      if(Pagination===0 && value<0){
        
      }
      else if(value<0 && Pagination!==0){
        setPagination(Pagination+value);
      }
      else{
        if(ResponseLength>(Pagination*20)+20){
          setPagination(Pagination+value);
        }
        
        
      }
      }
      

  
  const fetchCountries =async()=>{
      const response = await axios.get("https://restcountries.com/v3.1/"+props);
      setCountries(response.data.slice(Pagination*20,(Pagination*20)+20));
      setResponseLength(response.data.length);
  }
const PaginatonNextBeforeController=()=>{
  const Before = document.getElementById("pagi-before-btn");
  const Next = document.getElementById("pagi-next-btn");

  if(ResponseLength<(Pagination*20)+20){
    console.log("ResponseLength:",ResponseLength);
    Next.style.display="none";
  }
  else{
    Next.style.display="block";
  }

  if(Pagination===0){
    Before.style.display="none";
  }
  else{
    Before.style.display="block";
  }


}
  useEffect(()=>{
    fetchCountries();
    PaginatonNextBeforeController();
  },[Pagination,ResponseLength]) 

  return (
    <div className='countries-container pb-4 pt-6 w-full px-4 h-fit text-center flex flex-row flex-wrap justify-center items-center'>
<ul className='flex flex-row flex-wrap list-none justify-evenly items-center'>
      
{Countries.map((country,idx)=>(
    <li key={"li-"+idx} className='lg:m-4 m-2'>
       <SingleCountry country={country} key={idx}/>
    </li>
    ))}


      
      </ul>
      <ul className='mt-6 rounded-lg flex flex-row justify-center items-center'>
      <li id='pagi-before-btn'  className='p-[3px] rounded-full bg-blue-500 font-medium text-base mx-2 cursor-pointer' onClick={() => PaginationChanged(-1)}><MdKeyboardDoubleArrowLeft className='w-5 h-auto text-white'/></li>
        <li className='text-black font-medium text-l mx-2 underline underline-offset-2'>{Pagination+1}</li>
        <li id='pagi-next-btn' className='p-[3px] rounded-full bg-blue-500 font-medium text-base mx-2 cursor-pointer' onClick={()=> PaginationChanged(1)}><MdKeyboardDoubleArrowRight className='w-5 h-auto text-white'/></li>

      </ul>
      
      </div>
  )
}

export default Countries
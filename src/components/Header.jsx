import React,{useEffect,useState} from 'react'
import {BiMenuAltRight} from 'react-icons/bi';
import {IoMdClose} from 'react-icons/io';
import {GiWorld} from 'react-icons/gi';

const Header = () => {

  const [isElementsCreated, setIsElementsCreated] = useState(false);

  useEffect(()=>{
    const menu = document.getElementById("menu-container");
    if (menu) {
      setIsElementsCreated(true);
    }
  },[])
  const menu = document.getElementById("menu-container");

  const DisplayMenuProperty= (status)=>{
     if(setIsElementsCreated){

    if(status===true){
    menu.classList.add("block");
    menu.classList.remove("hidden");
    }
    else{
      menu.classList.add("hidden");
      menu.classList.remove("block");
    } 
  }
}
  
  
  return (
    <header className='w-full h-16 flex px-8 justify-between bg-white shadow-sm flex-row items-center'>
        <a href="/"><span className='Logo text-2xl font-bold flex justify-center items-center text-black'>
          <GiWorld className='mr-2'/>
          COUNTRIES
          </span></a>
        <nav className='w-fit lg:block hidden'>
          <ul className='list-none flex flex-row flex-wrap'>

          <a href="/all">
            <li className='mx-4 text-gray-500 text-base font-medium hover:text-black hover:underline hover:underline-offset-4 ease-out duration-300 cursor-pointer'>All Regions</li>
            </a>
            <a href="/asia">
            <li className='mx-4 text-gray-500 text-base font-medium hover:text-black hover:underline hover:underline-offset-4 ease-out duration-300 cursor-pointer'>Asia</li>
            </a>

            <a href="/africa">
            <li className='mx-4 text-gray-500 text-base font-medium hover:text-black hover:underline hover:underline-offset-4 ease-out duration-300 cursor-pointer'>Africa</li>
            </a>

            <a href="/north-america">
            <li className='mx-4 text-gray-500 text-base font-medium hover:text-black hover:underline hover:underline-offset-4 ease-out duration-300 cursor-pointer'>North America</li>
            </a>

            <a href="/south-america">
            <li className='mx-4 text-gray-500 text-base font-medium hover:text-black hover:underline hover:underline-offset-4 ease-out duration-300 cursor-pointer'>South America</li>
            </a>

            <a href="/europe">
            <li className='mx-4 text-gray-500 text-base font-medium hover:text-black hover:underline hover:underline-offset-4 ease-out duration-300 cursor-pointer'>Europe</li>
            </a>

            <a href="/australia">
            <li className='mx-4 text-gray-500 text-base font-medium hover:text-black hover:underline hover:underline-offset-4 ease-out duration-300 cursor-pointer'>Australia</li>
            </a>

          </ul>
        </nav>
        <BiMenuAltRight className='lg:hidden block w-8 h-auto text-black cursor-pointer' onClick={()=> DisplayMenuProperty(true)}/>
        <div id='menu-container' className='hidden top-0 left-0 fixed w-full h-full z-[49] min-h-screen opacity-100 bg-[#0000008a]'>
          <div id='menu-right' className='absolute right-0 p-3 flex flex-col min-h-screen bg-slate-50 z-50 lg:w-1/2 w-4/5 h-full top-0'>
            <IoMdClose id='close-btn' className='absolute z-[51] top-4 right-5 w-10 h-auto text-black cursor-pointer'onClick={()=> DisplayMenuProperty(false)}/>
            <span className='menu text-3xl font-bold border-b w-fit h-fit border-black text-black'>MENU</span>
            <ul className='list-none mt-4 flex flex-col'>
            <a href="/all">
            <li className='my-2 text-gray-500 text-xl font-medium hover:text-black hover:underline hover:underline-offset-4 ease-out duration-300 cursor-pointer'>All Regions</li>
            </a>
            <a href="/asia">
            <li className='my-2 text-gray-500 text-xl font-medium hover:text-black hover:underline hover:underline-offset-4 ease-out duration-300 cursor-pointer'>Asia</li>
            </a>

            <a href="/africa">
            <li className='my-2 text-gray-500 text-xl font-medium hover:text-black hover:underline hover:underline-offset-4 ease-out duration-300 cursor-pointer'>Africa</li>
            </a>

            <a href="/north-america">
            <li className='my-2 text-gray-500 text-xl font-medium hover:text-black hover:underline hover:underline-offset-4 ease-out duration-300 cursor-pointer'>North America</li>
            </a>

            <a href="/south-america">
            <li className='my-2 text-gray-500 text-xl font-medium hover:text-black hover:underline hover:underline-offset-4 ease-out duration-300 cursor-pointer'>South America</li>
            </a>

            <a href="/europe">
            <li className='my-2 text-gray-500 text-xl font-medium hover:text-black hover:underline hover:underline-offset-4 ease-out duration-300 cursor-pointer'>Europe</li>
            </a>

            <a href="/australia">
            <li className='my-2 text-gray-500 text-xl font-medium hover:text-black hover:underline hover:underline-offset-4 ease-out duration-300 cursor-pointer'>Australia</li>
            </a>
            </ul>
          </div>
        </div>
    </header>
  )
}

export default Header
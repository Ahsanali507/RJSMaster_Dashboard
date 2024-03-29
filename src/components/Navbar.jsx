import React, {useEffect} from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatar from '../data/avatar.jpg'
import {Cart, Chat, Notification, UserProfile} from '.'

import { useStateContext } from '../contexts/ContextProvider'

const NavButton=({title, customFunc, icon, color, dotColor})=>(
  <TooltipComponent content={title} position='BottomCenter'>
    <button type='button' onClick={customFunc} style={{color}}
       className='relative p-3 text-xl rounded-full hover:bg-light-gray'
    >
      <span style={{background:dotColor}} 
        className='absolute inline-flex w-2 h-2 rounded-full right-2 top-2'
      />
        {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const {activeMenu, setactiveMenu, isClicked, setisClicked, handleClick, screenSize, setscreenSize, currentColor} = useStateContext(); // contexts we are using here for our navbar
  useEffect(() => {
    const handleResize=()=>setscreenSize(window.innerWidth);

    window.addEventListener('resize',handleResize);// call handleResize every time when window width change

    handleResize();

    return ()=> window.removeEventListener('resize', handleResize);
  }, [])

  useEffect(() => {
    if (screenSize<=900){
      setactiveMenu(false)
    }
    else{
      setactiveMenu(true)
    }
  }, [screenSize])
  return (
    <div className='relative flex justify-between p-2 md:mx-6'>
      <NavButton 
        title="Menu" 
        color={currentColor} 
        icon={<AiOutlineMenu/>}
        customFunc={()=>setactiveMenu((prevActiveMenu)=>
          !prevActiveMenu
        )}
      />

      <div className='flex'>
        <NavButton 
          title="Cart" 
          color={currentColor}
          icon={<FiShoppingCart/>}
          customFunc={()=>handleClick('cart')}
        />

        <NavButton 
          title="Chat" 
          color={currentColor}
          dotColor="#03C9D7" 
          icon={<BsChatLeft/>}
          customFunc={()=>handleClick('chat')}
        />

        <NavButton 
          title="Notification" 
          color={currentColor}
          dotColor="#03C9D7" 
          icon={<RiNotification3Line/>}
          customFunc={()=>handleClick('notification')}
        />

        <TooltipComponent content="Profile" position='BottomCenter'>
          <div className='flex items-center gap-2 p-1 rounded-lg cursor-pointer hover:bg-light-gray'
            onClick={()=>handleClick('userProfile')}
          >
            <img src={avatar} alt="noavatar img" className='w-8 h-8 rounded-full'/>
            <p>
              <span className='text-gray-400 text-14 '>Hi, </span>{' '}
              <span className="ml-1 font-bold text-gray-400 text-14">Ahsan</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14'/>
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart/>}
        {isClicked.chat && <Chat/>}
        {isClicked.notification && <Notification/>}
        {isClicked.userProfile && <UserProfile/>}
      </div>
    </div>
  )
}

export default Navbar

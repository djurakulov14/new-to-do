import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { BiFoodMenu } from "react-icons/bi";
import MyModal from './MyModal/MyModal';
import FromAdd from './FormAdd';
import { RiFunctionAddFill } from "react-icons/ri";


function Header({work, setWork, personal, setPersonal}) {

    const [visible, setVisible] = useState(false)


  return (
    <header data-aos="fade-down" className='  w-full text-white  py-7 bg-[#67AD5B]'>
        <div className="container m-auto flex justify-between items-center">
            <div className=" flex gap-3 items-center">
                <BiFoodMenu size={35}/>
                <h1 className=' font-bold'>TO-DO APP</h1>
            </div>
            <RiFunctionAddFill size={35} className=' cursor-pointer' onClick={() => setVisible(true)} />
        </div>
        <MyModal visible={visible} setVisible={setVisible}>
            <FromAdd work={work} setWork={setWork} personal={personal} setPersonal={setPersonal} setVisible={setVisible}/>
        </MyModal>
    </header>
  )
}

export default Header
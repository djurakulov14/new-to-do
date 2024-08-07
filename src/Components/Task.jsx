import { Checkbox } from '@mui/material'
import React, { useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import MyModal from './MyModal/MyModal';



export const Task = ({item}) => {
    const [visible, setVisible] = useState(false)


  return (
    <>
    <div className=' flex justify-between w-full'>
        <div className="left flex justify-between gap-3">
            <Checkbox checked={item.isDone} onChange={() => setnewarr()}/>
            <div className="task flex flex-col">
                <span className={item.isDone ? 'line-through' : ' no-underline'}>{item.task}</span>
                <span>{item.date}</span>
            </div>
        </div>
        <div className="right flex gap-5 items-center">
            <FaRegEdit size={30} onClick={() => setVisible(!visible)}/>
            <AiOutlineDelete size={33}/>
        </div>
    </div>
    <MyModal visible={visible} setVisible={setVisible}>hello</MyModal>
    </>
  )
}

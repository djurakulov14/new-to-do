import { Checkbox } from '@mui/material'
import React, { useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import MyModal from './MyModal/MyModal';
import FromEdit from './FormEdit';



export const Task = ({item, arr, setArr}) => {
    const [visible, setVisible] = useState(false)

    let found = arr.findIndex((obj => obj.id == item.id))
    
    function complete() {
        setArr([...arr.filter(i => i.id != item.id), {...item, isDone: !item.isDone}])

    }

    function remove() {
        setArr(arr.filter(i => i.id != item.id))

    }

  return (
    <>
    <div className=' flex justify-between w-full'>
        <div className="left flex justify-between gap-3">
            <Checkbox checked={item.isDone} onChange={() => complete()}/>
            <div className="task flex flex-col">
                <span className={item.isDone ? 'line-through' : ' no-underline'}>{item.task}</span>
                <span>{item.date}</span>
            </div>
        </div>
        <div className="right flex gap-5 items-center">
            <FaRegEdit size={30} onClick={() => setVisible(!visible)}/>
            <AiOutlineDelete size={33} onClick={() => remove()}/>
        </div>
    </div>
    <MyModal visible={visible} setVisible={setVisible}>
        <FromEdit  item={item} arr={arr} setArr={setArr} setVisible={setVisible}/>
    </MyModal>
    </>
  )
}

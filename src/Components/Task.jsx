import { Checkbox } from '@mui/material'
import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";



export const Task = () => {
  return (
    <div className=' flex justify-between w-full'>
        <div className="left flex justify-between gap-3">
            <Checkbox />
            <div className="task flex flex-col">
                <span>Task</span>
                <span>date</span>
            </div>
        </div>
        <div className="right flex gap-5 items-center">
            <FaRegEdit size={30}/>
            <AiOutlineDelete size={33}/>
        </div>
    </div>
  )
}

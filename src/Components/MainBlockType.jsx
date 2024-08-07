import React from 'react'
import { Task } from './Task'

function MainBlockType() {
  return (
    <div className='w-[49%] bg-white rounded-xl flex flex-col items-center p-6'>
        <div className="info flex flex-col items-center gap-3">
            <h1 className=' font-bold text-2xl'>work</h1>
            <div className="round text-center rounded-full border-2 border-[#F3F4F6] w-7">
                <span>2</span>
            </div>
        </div>
        <Task/>

    </div>
  )
}

export default MainBlockType
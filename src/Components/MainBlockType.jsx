import React from 'react'
import { Task } from './Task'

function MainBlockType({type, arr, setArr}) {
  return (
    <div className='w-[49%] bg-white rounded-xl flex flex-col items-center p-6'>
        <div className="info flex flex-col items-center gap-3">
            <h1 className=' font-bold text-2xl'>{type}</h1>
            <div className="round text-center rounded-full border-2 border-[#F3F4F6] w-7">
                <span>{arr.length}</span>
            </div>
        </div>

		{
			arr.map(item => <Task key={item.id} item={item} arr={arr} setArr={setArr}/>)
		}
        

    </div>
  )
}

export default MainBlockType
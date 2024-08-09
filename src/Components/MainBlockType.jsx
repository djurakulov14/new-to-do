import React, { useState } from 'react'
import { Task } from './Task'

function MainBlockType({type, arr, setArr}) {
  
	// const [todos, setTodos] = useState(arr.filter(i => i.type === type))

  return (
    <div className='w-[49%] h-fit bg-white rounded-xl flex flex-col items-center p-6'>
        <div className="info flex flex-col items-center gap-3">
            <h1 className=' font-bold text-2xl'>{type}</h1>
            <div className="round text-center rounded-full border-2 border-[#F3F4F6] w-7">
                <span>{arr.filter(i => i.type === type).length}</span>
            </div>
        </div>

		{
			arr.filter(j => j.type === type).map(item => <Task key={item.id} item={item} arr={arr} setArr={setArr}/>)
		}
        

    </div>
  )
}

export default MainBlockType
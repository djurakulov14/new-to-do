import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'

function FromEdit({item, arr, setArr, setVisible}) {

    const [newTask, setNewTask] = useState(item);

    const handleChangeTask = (event) => {
        setNewTask({...newTask, task:event.target.value});
    };

    const handleChangeDate = (event) => {
        setNewTask({...newTask, date:event.target.value});
        
    };

	const updateTask = (id, updatedProperties) => {
		const updatedTasks = arr.map(task => 
		  task.id === id ? { ...task, ...updatedProperties } : task
		);
		setArr(updatedTasks);
	};

    const submitForm = (e) => {      
        e.preventDefault()
      
        let data = {}
    
        let fm = new FormData(e.target)
    
        fm.forEach((value, key) => {
          data[key] = value
        })
        
        updateTask(item.id, data)
        setVisible(false)
        
    }


  return (
    <form className='flex flex-col gap-5' onSubmit={(e) => submitForm(e)}>
        <h1 className=' text-2xl font-bold'>Edit</h1>
        <TextField required name='task' value={newTask.task} id="task" label="Task" variant="outlined" onChange={(e) => handleChangeTask(e)}/>
        <TextField required name='date' type='date' id="date" variant="outlined" onChange={(e) => handleChangeDate(e)}/>
        <Button type='submit' variant="outlined" >SUBMIT</Button>
    </form>
  )
}

export default FromEdit
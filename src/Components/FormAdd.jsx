import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'

function FromAdd({ work, setWork, personal, setPersonal, setVisible}) {

    const [newTask, setNewTask] = useState({
		task: '',
		date: '',
		id: Math.random(),
		isDone: false,
		type: ''
	});


	const handleChange = (event) => {
	  setNewTask({...newTask, type: event.target.value});
	};

    const handleChangeTask = (event) => {
        setNewTask({...newTask, task:event.target.value});
    };

    const handleChangeDate = (event) => {
        setNewTask({...newTask, date:event.target.value});
        
    };


    const submitForm = (e) => {      
        e.preventDefault()
      
        let data = {
			task: '',
			date: '',
			id: Math.random(),
			isDone: false,
			type: ''
		}
    
        let fm = new FormData(e.target)
    
        fm.forEach((value, key) => {
          data[key] = value
        })

        if(data.type === 'work'){
			setWork([...work, data])
		} else {
			setPersonal([...personal, data])
		}
		setVisible(false)
		
		setNewTask({...newTask, task:'', date: '', type: ''})
    }


  return (
    <form className='flex flex-col gap-5' onSubmit={(e) => submitForm(e)}>
        <h1 className=' text-2xl font-bold text-black'>New Task</h1>
        <TextField required value={newTask.task} name='task' id="task" label="Task" variant="outlined" onChange={(e) => handleChangeTask(e)}/>
        <TextField required value={newTask.date} name='date' type='date' id="date" variant="outlined" onChange={(e) => handleChangeDate(e)}/>
		<FormControl fullWidth>
			<InputLabel id="demo-simple-select-label">Type</InputLabel>
			<Select
			labelId="demo-simple-select-label"
			id="demo-simple-select"
			value={newTask.type}
			label="Age"
			onChange={handleChange}
			name='type'
			required
			>
			<MenuItem value='work'>work</MenuItem>
			<MenuItem value='personal'>personal</MenuItem>
			</Select>
		</FormControl>
        <Button type='submit' variant="outlined" >SUBMIT</Button>
    </form>
  )
}

export default FromAdd
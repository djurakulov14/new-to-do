import { useState } from "react"
import Header from "./Components/Header"
import MainBlockType from "./Components/MainBlockType"


function App() {

  const [arr, setArr] = useState({
	work: [
		{
			id:1, 
			task: "Lorem ipsum dolor sit amet.",
			isDone: false,
			date: "08.08.2024",
			note: ""
		},
		{
			id:2, 
			task: "Lorem ipsum dolor sit amet.",
			isDone: true,
			date: "08.08.2024",
			note: ""
		},
		{
			id:3, 
			task: "Lorem ipsum dolor sit amet.",
			isDone: true,
			date: "08.08.2024",
			note: ""
		},
		{
			id:4, 
			task: "Lorem ipsum dolor sit amet.",
			isDone: false,
			date: "08.08.2024",
			note: ""
		},
		{
			id:5, 
			task: "Lorem ipsum dolor sit amet.",
			isDone: false,
			date: "08.08.2024",
			note: ""
		},
		{
			id:6, 
			task: "Lorem ipsum dolor sit amet.",
			isDone: true,
			date: "08.08.2024",
			note: ""
		}
	],
	personal: [
		{
			id:1, 
			task: "Lorem ipsum dolor sit amet.",
			isDone: false,
			date: "08.08.2024",
			note: ""
		},
		{
			id:2, 
			task: "Lorem ipsum dolor sit amet.",
			isDone: true,
			date: "08.08.2024",
			note: ""
		},
		{
			id:3, 
			task: "Lorem ipsum dolor sit amet.",
			isDone: true,
			date: "08.08.2024",
			note: ""
		},
		{
			id:4, 
			task: "Lorem ipsum dolor sit amet.",
			isDone: false,
			date: "08.08.2024",
			note: ""
		},
		{
			id:5, 
			task: "Lorem ipsum dolor sit amet.",
			isDone: false,
			date: "08.08.2024",
			note: ""
		},
		{
			id:6, 
			task: "Lorem ipsum dolor sit amet.",
			isDone: true,
			date: "08.08.2024",
			note: ""
		}
	],
  })


  
 
  return (
    <>
        <Header/>
        <main className="bg-[#F3F4F6] h-screen">
            <div className="container m-auto pt-10 flex justify-between">
                <MainBlockType type="work" arr={arr.work} setArr={setArr}/>
                <MainBlockType type="personal"  arr={arr.personal} setArr={setArr}/>
            </div>
        </main>
    </>
  )
}

export default App

import { useState } from "react"
import Header from "./Components/Header"
import MainBlockType from "./Components/MainBlockType"
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

    AOS.init();
    
  const [personal, setPersonal] = useState([
    {
        "id": 1, 
        "task": "Сделать дз",
        "isDone": false,
        "date": "2024-08-08",
        "type": "personal"
    },
    {
        "id": 2, 
        "task": "Подготовить отчёт",
        "isDone": false,
        "date": "2024-08-08",
        "type": "work"
    },
    {
        "id": 3, 
        "task": "Сходить в спортзал",
        "isDone": true,
        "date": "2024-08-08",
        "type": "personal"
    },
    {
        "id": 4, 
        "task": "Встреча с клиентом",
        "isDone": false,
        "date": "2024-08-08",
        "type": "work"
    },
    {
        "id": 5, 
        "task": "Купить продукты",
        "isDone": false,
        "date": "2024-08-08",
        "type": "personal"
    },
    {
        "id": 6, 
        "task": "Провести собрание",
        "isDone": false,
        "date": "2024-08-08",
        "type": "work"
    },
    {
        "id": 7, 
        "task": "Прочитать книгу",
        "isDone": false,
        "date": "2024-08-08",
        "type": "personal"
    },
    {
        "id": 8, 
        "task": "Отправить электронные письма",
        "isDone": true,
        "date": "2024-08-08",
        "type": "work"
    },
    {
        "id": 9, 
        "task": "Записаться на курсы",
        "isDone": false,
        "date": "2024-08-08",
        "type": "personal"
    },
    {
        "id": 10, 
        "task": "Обновить проектную документацию",
        "isDone": false,
        "date": "2024-08-08",
        "type": "work"
    }
])

const [work, setWork] = useState([
    {
        "id": 1, 
        "task": "Сделать дз",
        "isDone": false,
        "date": "2024-08-08",
        "type": "personal"
    },
    {
        "id": 2, 
        "task": "Подготовить отчёт",
        "isDone": false,
        "date": "2024-08-08",
        "type": "work"
    },
    {
        "id": 3, 
        "task": "Сходить в спортзал",
        "isDone": true,
        "date": "2024-08-08",
        "type": "personal"
    },
    {
        "id": 4, 
        "task": "Встреча с клиентом",
        "isDone": false,
        "date": "2024-08-08",
        "type": "work"
    },
    {
        "id": 5, 
        "task": "Купить продукты",
        "isDone": false,
        "date": "2024-08-08",
        "type": "personal"
    },
    {
        "id": 6, 
        "task": "Провести собрание",
        "isDone": false,
        "date": "2024-08-08",
        "type": "work"
    },
    {
        "id": 7, 
        "task": "Прочитать книгу",
        "isDone": false,
        "date": "2024-08-08",
        "type": "personal"
    },
    {
        "id": 8, 
        "task": "Отправить электронные письма",
        "isDone": true,
        "date": "2024-08-08",
        "type": "work"
    },
    {
        "id": 9, 
        "task": "Записаться на курсы",
        "isDone": false,
        "date": "2024-08-08",
        "type": "personal"
    },
    {
        "id": 10, 
        "task": "Обновить проектную документацию",
        "isDone": false,
        "date": "2024-08-08",
        "type": "work"
    }
])


  
 
  return (
    <>
        <Header work={work} setWork={setWork} personal={personal} setPersonal={setPersonal}/>
        <main className="bg-[#F3F4F6] h-screen">
            <div className="container m-auto pt-10 flex justify-between">
                <MainBlockType type="work" arr={work} setArr={setWork}/>
                <MainBlockType type="personal"  arr={personal} setArr={setPersonal}/>
            </div>
        </main>
    </>
  )
}

export default App

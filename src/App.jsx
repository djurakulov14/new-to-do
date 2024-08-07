import Header from "./Components/Header"
import MainBlockType from "./Components/MainBlockType"


function App() {

  return (
    <>
        <Header/>
        <main className="bg-[#F3F4F6] h-screen">
            <div className="container m-auto pt-10 flex justify-between">
                <MainBlockType/>
                <MainBlockType/>
            </div>
        </main>
    </>
  )
}

export default App

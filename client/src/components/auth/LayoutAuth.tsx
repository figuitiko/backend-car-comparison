import Header from "./Header"
import Main from "./Main"
import SideBar from "./sideBar/SideBar"



const LayOutAuth = () => {
  
  return (
    <div className="grid grid-rows-[100px_minmax(400px,_100vh)] grid-cols-[277px_minmax(600px,_100vw)]">
      <SideBar />
      <Header />
      <Main />
    </div>
  )
}

export default LayOutAuth
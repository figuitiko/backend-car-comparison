import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <main className='col-start-2 p-8'>      
      <Outlet />
    </main>
  )
}

export default Main
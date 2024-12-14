import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './features/authSlice'
import { Header, Footer } from './components/index'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {


  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => {
        return setLoading(false)
      })
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          TODO: {/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  )
}

export default App

import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import Button from '../Button'
function LogoutBtn() {

    const dispatch = useDispatch()

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }


    return (
        <Button
        onClick = {logoutHandler} 
        className = "inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">
        Logout</Button>
    )
}

export default LogoutBtn

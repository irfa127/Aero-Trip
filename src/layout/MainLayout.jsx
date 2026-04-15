import React from 'react'
import MainLanding from '../Components/Navbar/MainLanding'
import { Outlet } from 'react-router'

const MainLayout = () => {
    return (
        <>
            <MainLanding/>
            <Outlet/>
            
        </>
    )
}

export default MainLayout
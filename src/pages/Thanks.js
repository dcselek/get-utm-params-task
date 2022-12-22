import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function Thanks() {
    const location = useLocation()
    const [navState, setNavState] = useState(null)

    useEffect(() => {
        const { state } = location
        //if state is not defined, redirect to home page
        console.log(state)
        if (!state) {
            window.location.href = '/'
        }
        setNavState(state)
    }, [])

    const clearLocalStorage = () => {
        localStorage.clear()
        window.location.href = '/'
    }

    return (
        <div className='flex w-full h-screen items-center justify-center flex-col gap-8'>
            <h1 className='text-4xl text-yellow-500'>Thanks for submitting the form</h1>
            <p className='text-yellow-200'>We created localStorage keys for your UTM params <br/> and <br/> published your form data under this paragraph:</p>
            {navState && (
                <div className='flex text-white flex-col font-bold items-center'>
                    <p>{navState.fullName}</p>
                    <p>{navState.email}</p>
                    <p>{navState.phone}</p>
                </div>
            )}
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={clearLocalStorage}>
                Go to home page and clear localStorage
            </button>
        </div>
    )
}

export default Thanks
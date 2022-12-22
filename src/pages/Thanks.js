import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

function Thanks() {
    const [searchParams] = useSearchParams();
    const [formParams, setFormParams] = useState(null)

    useEffect(() => {
        let fullName = searchParams.get("fullName");
        let email = searchParams.get("email");
        let phone = searchParams.get("phone");
        setFormParams({ fullName, email, phone })
    }, [])

    const clearLocalStorage = () => {
        localStorage.clear()
        window.location.href = '/'
    }

    if (!formParams) {
        return (
            <div className='flex w-full h-screen items-center justify-center flex-col gap-8'>
                <h1 className='text-4xl text-yellow-500'>Loading</h1>
            </div>
        )
    } else {
        return (
            <div className='flex w-full h-screen items-center justify-center flex-col gap-8'>
                <h1 className='text-4xl text-yellow-500'>Thanks for submitting the form</h1>
                <p className='text-yellow-200'>We created localStorage keys for your UTM params <br /> and <br /> published your form data under this paragraph:</p>
                {formParams && (
                    <div className='flex text-white flex-col font-bold items-center'>
                        <p>{formParams.fullName}</p>
                        <p>{formParams.email}</p>
                        <p>{formParams.phone}</p>
                    </div>
                )}
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={clearLocalStorage}>
                    Go to home page and clear localStorage
                </button>
            </div>
        )
    }
}

export default Thanks
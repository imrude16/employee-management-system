import React, { useState } from 'react'

const LogIn = ({handleLogIn}) => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogIn(email,password)
        setemail('')
        setpassword('')
    }

  return (
    <div className='flex items-center justify-center h-screen w-screen'>
        <div className='border-2 border-blue-300 p-20 rounded-xl'>
            <form onSubmit={(e) => { submitHandler(e)}}
            className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                onChange={(e) => { setemail(e.target.value) }}
                required className='border-2 bg-transparent outline-none border-blue-300 rounded-full text-xl px-5 py-3' type="email" placeholder='Enter your email'/>
                <input 
                value={password} 
                onChange={(e) => { setpassword(e.target.value) }}
                required className='mt-3 border-2 bg-transparent outline-none border-blue-300 rounded-full text-xl px-5 py-3' type="password" placeholder='Enter password'/>
                <button className='border-none mt-5 bg-blue-300 outline-none border-blue-300 rounded-full text-lg px-3 py-1' >Log In</button>
            </form>

        </div>

    </div>
  )
}

export default LogIn
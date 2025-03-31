import React, { useState } from 'react'

const Header = (props) => {
  // const [username, setusername] = useState('')

  // if(!data){
  //   setusername('Admin')
  // }else{
  //   setusername(data.firstname)
  // }

  const logOutUser = ()=> {
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }

  return (
    <div id='header' className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'> Hello <br /> <span className='text-3xl font-semibold'> Guys </span> 😊</h1>
        <button onClick={logOutUser}  className='bg-red-500 hover:bg-red-600 rounded-sm text-lg font-medium px-4 py-2'>Log Out</button>
    </div>
  )
}

export default Header
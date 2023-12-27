import React from 'react'

function SignUpForm() {
  return (
    <div className='flex flex-col w-[45%]'>
      <span className=' text-3xl font-bold text-center'>Sign Up</span>
      <form action="" className='flex flex-col text-md space-y-1'>
        <label className='font-bold underline' htmlFor="">Full Name</label>
        <input className='p-1 rounded-b-md rounded-e-md text-[#000000] text-xl' type="text" name="" id="" />
        <label className='font-bold underline' htmlFor="">Username</label>
        <input className='p-1 rounded-b-md rounded-e-md text-[#000000] text-xl' type="text" name="" id="" />
        <label className='font-bold underline' htmlFor="">Password</label>
        <input className='p-1 rounded-b-md rounded-e-md text-[#000000] text-xl' type="password" name="" id="" />
        <label className='font-bold underline' htmlFor="">Confirm Password</label>
        <input className='p-1 rounded-b-md rounded-e-md text-[#000000] text-xl' type="password" name="" id="" />
        <label className='font-bold underline' htmlFor="">E-mail</label>
        <input className='p-1 rounded-b-md rounded-e-md text-[#000000] text-xl' type="email" name="" id="" />
        <label className='font-bold underline' htmlFor="">Telephone</label>
        <input className='p-1 rounded-b-md rounded-e-md text-[#000000] text-xl' type="email" name="" id="" />
        <div className='flex flex-row justify-between'>
          <div className='flex flex-col'>
            <label className='font-bold underline' htmlFor="">Gender</label>
            <input className='p-1 rounded-b-md rounded-e-md text-[#000000] text-xl' type="text" name="" id="" />
          </div>
          <div className='flex flex-col'>
            <label className='font-bold underline' htmlFor="">Birth</label>
            <input className='p-1 rounded-b-md rounded-e-md text-[#000000] text-xl' type="date" name="" id="" />
          </div>
        </div>
        <label className='font-bold underline' htmlFor="">Verify Key</label>
        <input className='p-1 rounded-b-md rounded-e-md text-[#000000] text-xl' type="password" name="" id="" />
        <div className='flex items-center flex-row justify-center pt-6'>
          <button className='px-10  font-bold py-2 rounded-md bg-background hover:bg-secondary'>Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default SignUpForm
import React from 'react'

function SignInForm() {
  return (
    <div className='flex flex-col w-[45%]'>
        <span className=' text-3xl font-bold text-center'>Sign In</span>
        <form action="" className='flex flex-col  text-md space-y-1'>
            <label className='font-bold underline' htmlFor="">Username</label>
            <input className='p-1 rounded-b-md rounded-e-md text-[#000000] text-xl' type="text" name="" id="" />
            <label className='font-bold underline' htmlFor="">Password</label>
            <input className='p-1 rounded-b-md rounded-e-md text-[#000000] text-xl' type="password" name="" id="" />
            <div className='flex items-center flex-row justify-between pt-6'>
                <a href="" className=' underline font-bold'>หากลืมรหัสผ่าน</a>
                <button className='px-10  font-bold py-2 rounded-md bg-background hover:bg-secondary'>Sign In</button>
            </div>
        </form>
    </div>
  )
}

export default SignInForm
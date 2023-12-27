import React, { useState } from 'react'
import SignInForm from '../components/SignInForm'
import SignUpForm from '../components/SignUpForm';
const Divider = () => {
    return (
        <div className='flex w-[10%] flex-col items-center'>
            <div className='w-[3%] h-[18rem] bg-textPrimary'></div>
            <div className='p-2 text-2xl'>OR</div>
            <div className='w-[3%] h-[18rem] bg-textPrimary'></div>
        </div>
    );
}

const AskingContent = (props) => {
    return (
        <div className='text-2xl w-[45%] font-bold text-center'>{props.content} <a href="#" onClick={props.handler} className='underline'>{props.chooser}</a></div>
    );
}

function SignInPage() {
    const [isLoginForm, setIsLoginForm] = useState(true)
    const swapFormHandler = () => setIsLoginForm(!isLoginForm)
    return (
        <div className={`m-auto bg-primary h-[75%] w-[60%] rounded-md flex flex-row items-center p-8${!isLoginForm ? ' flex-row-reverse' : ''}`}>
            {isLoginForm ? <SignInForm /> : <SignUpForm />}
            <Divider />
            <AskingContent content={isLoginForm ? `ยังไม่ได้ส่งคำขอสมัครเป็นแอดมินงั้นหรือคลิกที่นี่เพื่อ` : `ได้รับการยินยอมให้เป็นแอดมินแล้วงั้นหรือคลิกที่นี่เพื่อ `} 
                           chooser={isLoginForm ? "สมัครสมาชิก" : "เข้าสู่ระบบ"}
                           handler={swapFormHandler}
            />
        </div>
    )
}

export default SignInPage
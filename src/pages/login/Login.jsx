import React from 'react'
import CustomBtn from '../../components/customBtn/CustomBtn'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className=' md:w-[80%] lg:w-[50%] w-full space-y-6'>
                <form className='flex flex-col  gap-8 m-8 md:m-16 p-8 shadow-lg shadow-themePrimary' >
                <h1 className='text-5xl font-bold text-center'>Login</h1>
                    <input type="text" name='details' placeholder="Enter your Email or Phone no..." className="input input-bordered w-full " />
                    <input type="password" name='pin' placeholder="Enter your pin..." className="input input-bordered w-full " />
                    <CustomBtn text={'Login'} btnType={"submit"} style={"hover:bg-themeSecondary hover:text-white"} type="submit" />
                    <p>Dont have an account? <Link to={"/register"}><span className='text-themePrimary font-medium'>Register</span></Link></p>
                </form>

            </div>
        </div>
    )
}

export default Login
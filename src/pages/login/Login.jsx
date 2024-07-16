import React from 'react'
import CustomBtn from '../../components/customBtn/CustomBtn'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Login = () => {

    const { handleSubmit, register, formState: { errors, touchedFields } } = useForm();

    const submitHandler = async(data) => {
        console.log(data)
    }

    return (
        <div className='flex items-center justify-center h-screen'>
            <div className=' md:w-[80%] lg:w-[50%] w-full space-y-6'>
                <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col  gap-8 m-8 md:m-16 p-8 shadow-lg shadow-themePrimary' >
                    <h1 className='text-5xl font-bold text-center'>Login</h1>

                    <div>
                        <input type="text" name='details' placeholder="Enter your Email or Phone no..." className="input input-bordered w-full " {...register("details", {
                            required: {
                                value: true,
                                message: "Please enter your email or phone"
                            }
                        })} />
                        {
                            errors?.details && touchedFields?.details && <span className='text-red-500'>{errors.details?.message}</span>
                        }
                    </div>

                    <div>
                        <input type="password" name='pin' placeholder="Enter your pin..." className="input input-bordered w-full " {...register("pin", {
                            required: {
                                value: true,
                                message: "pin is required."
                            },
                            minLength: {
                                value: 5,
                                message: "pin must be 5 characters"
                            },
                            maxLength: {
                                value: 5,
                                message: "pin must be 5 characters"
                            }
                        })} />

                        {errors.pin && touchedFields.pin && <span className='text-red-500'>{errors.pin?.message}</span>}

                    </div>
                    <CustomBtn text={'Login'} btnType={"submit"} style={"hover:bg-themeSecondary hover:text-white"} type="submit" />
                    <p>Dont have an account? <Link to={"/register"}><span className='text-themePrimary font-medium'>Register</span></Link></p>
                </form>

            </div>
        </div>
    )
}

export default Login
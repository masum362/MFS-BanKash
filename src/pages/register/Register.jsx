import React from 'react'
import CustomBtn from '../../components/customBtn/CustomBtn'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Register = () => {

    const { register, handleSubmit, reset, formState: { errors, touchedFields } } = useForm()


    const submitHandler = data => {
        console.log(data);
    }

    return (
        <div className='flex items-center justify-center h-screen'>
            <div className=' md:w-[80%] lg:w-[50%] w-full space-y-6'>
                <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col  gap-8 m-8 md:m-16 p-8 shadow-lg shadow-themePrimary' >
                    <h1 className='text-5xl font-bold text-center'>Register</h1>
                    <div>
                        <input type="text" name='name' placeholder="Enter your name..." className="input input-bordered w-full " {...register("name", {
                            required: {
                                value: true,
                                message: "name is required."
                            }
                        })} />
                        {errors.name && touchedFields.name && <span className='text-red-500'>{errors.name?.message}</span>}

                    </div>
                    <div>
                        <input type="email" name='email' placeholder="Enter your email..." className="input input-bordered w-full " {...register("email", {
                            required: {
                                value: true,
                                message: "email is required."
                            }
                        })} />
                        {errors.email && touchedFields.email && <span className='text-red-500'>{errors.email?.message}</span>}

                    </div>
                    <div>
                        <input type="number" name='mobile' placeholder="Enter your phone no..." className="input input-bordered w-full "  {...register("mobile", {
                            required: {
                                value: true,
                                message: "mobile number is required."
                            }
                        })} />
                        {errors.mobile && touchedFields.mobile && <span className='text-red-500'>{errors.mobile?.message}</span>}

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
                    <CustomBtn text={'Register'} btnType={"submit"} style={"hover:bg-themeSecondary hover:text-white"} type="submit" />
                    <p>Dont have an account? <Link to={"/login"}><span className='text-themePrimary'>Login</span></Link></p>
                </form>

            </div>
        </div>
    )
}

export default Register
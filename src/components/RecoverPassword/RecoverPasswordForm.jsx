import React from 'react'
import { useForm } from 'react-hook-form'

export const RecoverPasswordForm = () => {
    const { register, handleSubmit, watch, formState: {errors} } = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        console.log(data)
    }
    return(
        <>
        
        <div className='w-96 m-40'>
            <form action="" className='bg-color2 shadow-md rounded px-8 pt-3 pb-8 mb-4' onSubmit={handleSubmit(onSubmit)}>
            <h1>Recover Password</h1>
            <input className='shadow appearance-none border rounded w-full py-2 mb-5 text-gray-700 leading-tight focus:shadow-outline' type="email" id='email' placeholder='Email' 
                {...register("email", {
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                })} 
                /> 
                {errors?.email?.type === "pattern" && <p className='text-red-500'>Please write correct email address</p>}

                <input className='shadow appearance-none border rounded w-full py-2 mb-5 text-gray-700 leading-tight focus:shadow-outline' type="text" id='code' placeholder='Code' 
                {...register("code", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                })} 
                /> 
                {errors?.password?.type === "required" && <p className='text-red-500'>Password is required</p>}
                {errors?.code?.type === "pattern" && <p className='text-red-500'>Please write correct code</p>}
                

                {/* <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'></label> */}
                <input className='shadow appearance-none border rounded w-full py-2 mb-3 text-gray-700 leading-tight focus:shadow-outline' type="password" id='confirmPassword' placeholder='New Password' 
                {...register("New Password", {
                    minLength: 8,
                    required: true
                })} 
                /> 
                
                {errors?.password?.type === "minLength" && <p className='text-red-500'>Your password must be larger then 8 characters</p>}
                {errors?.password?.type === "required" && <p className='text-red-500'>Password is required</p>}
                
                {/* <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'></label> */}
                <input className='shadow appearance-none border rounded w-full py-2 mb-3 text-gray-700 leading-tight focus:shadow-outline' type="password" id='confirmPassword' placeholder='Confirm Password' 
                {...register("Confirm Password", {
                    minLength: 8,
                    required: true
                })} 
                /> 
                
                {errors?.password?.type === "minLength" && <p className='text-red-500'>Your password must be larger then 8 characters</p>}
                {errors?.password?.type === "required" && <p className='text-red-500'>Password is required</p>}
            
                <button type='submit' className='w-full bg-cian2 hover:bg-blue-600 text-white font-bold py-2 px-4 mb-5 rounded focus:outline-none foucus:shadow-outline mt-3'>Recover
                </button>
                <a href="/">Sign in</a>
                <p className='font-bold'>----------- or -----------</p>
                <a href="./Register">Sign Up</a>
            
            </form> 
        </div>
        </>
    )
}

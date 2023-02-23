import React from 'react'
import { useForm } from 'react-hook-form'

export const LoginForm = () => {
    const { register, handleSubmit, watch, formState: {errors} } = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        console.log(data)
    }
    
    return(
        <>
        <div classLogin='w-96 m-40'>
            <form action=""className='bg-color2 shadow-md rounded px-8 pt-3 pb-8 mb-4' onSubmit={handleSubmit(onSubmit)}>
                <h1>Sign in</h1>
                {/* <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'></label> */}
                <input className='shadow apperance-none border rounded
                w-full py-2 mb-5 text-gray-700 leading-tight
                focis:shadow-outline' type="email" id="email" 
                placeholder='Email'
                {...register("email",{
                    pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                })}
                />
                {errors?.email?.type === "pattern" && <p
                className='text-red-500'>Please write correct email address</p>
                }
                 {/* <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'></label> */}
                <input className='shadow appearance-none border rounded w-full py-2 
                mb-5 text-gray-700 leading-tight focus:shadow-outline' type="password"
                id='password' placeholder='Password' 
                {...register("password", {
                    minLength: 8,
                    required: true
                })} 
                /> 
                {errors?.password?.type === "minLength" && <p
                className='text-red-500'>Your password must be larger 
                then 8 characters</p>}
                {errors?.password?.type === "required" && 
                <p className='text-red-500'>Password is required</p>}
                
                <button type='submit' className='w-full bg-cian2
                hover:bg-blue-600 text-white font-bold py-2 px-4 mb-3
                rounded focus:outline-none foucus:shadow-outline mt-3'>Sign in</button>
                
                
                <a href="./RecoverPassword">Recover Password</a>
                <p className='font-bold'>----------- or -----------</p>
                <a href="./register">Sign up</a>
            </form>
        </div>
        </>
    )
}

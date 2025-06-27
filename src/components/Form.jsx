import React, { useState } from 'react'
import uploadIcon from "/icon-upload.svg"
import infoIcon from "/icon-info.svg"

const Form = ({formData, setFormData, isSubmitted, setIsSubmitted}) => {
    
    function inputChange(e){
        const { name, value } = e.target;
        const file = e.target.files ? e.target.files[0] : null;

        
        setFormData((prev) => {
            return {
                ...prev,
                [name]: value,
                avatar: file ? URL.createObjectURL(file) : prev.avatar
                
            }
        });
    }

    function submit(e){
        e.preventDefault();
        console.log('Form submitted:', formData);

        setIsSubmitted(true);
    }

    console.log(formData.avatar);
    

  return (
    <div className='px-5'>
        <h1 className='mb-4 text-3xl md:text-5xl md:w-4/5 xl:w-3/5 2xl:w-3/6 mx-auto text-center font-bold'> Your Journey to Coding Conf 2025 Starts Here!</h1>
        <p className='text-center text-lg text-gray-300 mb-6'>Secure your spot at next year's biggest coding conference.</p>
        <form action="" className='w-full md:w-1/2 xl:w-[32%] mx-auto relative z-50'>
            <div className='flex flex-col gap-2 mb-6'>
                <label htmlFor="avatar" className='text-xl'>Upload Avatar</label>

                <div className='  flex flex-col items-center h-44 p-4 border border-dashed rounded-md'>
                    
                    <div className=' mt-5 border border-gray-600 h-12 w-12 rounded-md flex items-center justify-center'>
                        <img src={formData.avatar ? formData.avatar : uploadIcon} alt="upload icon" />
                    </div>
                    <input type="file" onChange={inputChange} name="avatar" id="avatar"  className='opacity-0 cursor-pointer bg-gray-600 p-6'/>
                    <p className='-mt-10 text-gray-400'>Drag and drop or click to upload</p>
                </div>
                <div className='flex gap-2 text-gray-400'>
                    <img src={infoIcon} alt="" />
                    <span className='text-sm'>Upload your photo (JPG or PNG, max size: 500KB).</span>
                </div>
            </div>
            <div className='flex flex-col gap-2 text-xl mb-6'>
                <label htmlFor="fullName">Full Name</label>
                <input id="fullName" type="text" name='name'  onChange={inputChange} className='rounded-lg border border-gray-400 h-12 p-3 bg-transparent' placeholder='' />
            </div>
            <div className='flex flex-col gap-2 text-xl mb-6'>
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" name='email' onChange={inputChange} className='rounded-lg  border border-gray-400 h-12 p-3 bg-transparent' placeholder='example@email.com' />
            </div>
             <div className='flex flex-col gap-2 text-xl mb-6'>
                <label htmlFor="github">GitHub Username</label>
                <input id="github" type="text" name='github'  onChange={inputChange} className='rounded-lg border border-gray-400 h-12 p-3 bg-transparent' placeholder='@yourusername' />
            </div>
            <button onClick={submit} className='bg-[#F57261] py-3 rounded-lg w-full text-[#0C082B] font-bold text-xl z-[999] relative'>Generate My Ticket</button>
        </form>

        {/* <img className='relative z-50' src={avatar} alt="" /> */}
    {/* <p> this is for name: {name} </p>
    <p> this is for email: {email} </p>
    <p> this is for github: {github} </p> */}
    </div>
  )
}

export default Form
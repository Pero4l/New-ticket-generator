import React from 'react'
import logo from "/logo-mark.svg"
import LogoFull from '/logo-full.svg'
import avatar from "/image-avatar.jpg"
import githubIcon from "/icon-github.svg"
import ticket from "/pattern-ticket.svg"

const Ticket = ({formData}) => {


  

  return (
    <>

    <div className='px-5'>
         <h1 className='mb-10 text-3xl md:text-5xl md:w-4/5 xl:w-3/5 2xl:w-3/6 mx-auto text-center font-bold'>Congrats, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F37362] to-[#FFFFFF]">{formData.name} </span> Your ticket is ready.</h1>
         <p className='text-center text-lg lg:text-xl w-full md:w-2/3 lg:w-3/6 xl:w-[30%] 2xl:w-[26%] mx-auto mb-20 lg:mb-32'>We've emailed your ticket to <span className='text-[#E16151]'>{formData.email} </span>and will send updates in the run up to the event.</p>

         <div className='md:mx-[100px] lg:mx-[400px] '>
         <img src={ticket} alt="" />

              <div className='flex flex-col lg:gap-7 gap-3 md:gap-8 relative bottom-[153px] md:bottom-[190px] px-7 lg:bottom-56 lg:px-20 md:px-20' >

                <div>
                  <img src={LogoFull} alt="" />
                  <h1 className='p-2 px-11 lg:text-base text-sm'>Jan 31, 2025 / Austin, TX</h1>
                </div>

                <div>
                  <div className='flex items-center gap-2 lg:gap-4'>
                    <img className='lg:w-10 w-10 rounded-lg' src={formData.avatar} alt="" />

                    <div className=''>
                      <h1 className='text-xl lg:text-2xl font-bold'>{formData.name} </h1>
                      <div className='flex font-medium text-gray-300 gap-1 lg:gap-2 lg:text-base text-sm'><img className='w-3 lg:w-5' src={githubIcon} alt="" /> {formData.github}</div>
                    </div>
                  </div>
                </div>

                <div><h1 className='rotate-90 relative left-[155px] lg:left-[237px] lg:top-16 md:left-[220px] md:top-10 top-14 lg:text-2xl font-semibold'>#01689</h1></div>
              </div>
         </div>
         
    </div>
    </>
  )
}

export default Ticket
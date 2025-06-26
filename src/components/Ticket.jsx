import React from 'react'
import logo from "/logo-mark.svg"
import avatar from "/image-avatar.jpg"
import githubIcon from "/icon-github.svg"
import ticket from "/pattern-ticket.svg"

const Ticket = () => {
  return (
    <>
      <div className=' mx-auto flex justify-center'>
              <img src={logo} alt="logo"  className='mb-14'/>
          </div>

    <div className='px-5'>
         <h1 className='mb-4 text-3xl md:text-5xl md:w-4/5 xl:w-3/5 2xl:w-3/6 mx-auto text-center font-bold'>Congrats, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F37362] to-[#FFFFFF]">Jonathan Kristof! </span> Your ticket is ready.</h1>
         <p className='text-center text-lg w-full md:w-2/3 lg:w-3/6 xl:w-[30%] 2xl:w-[26%] mx-auto mb-16'>We've emailed your ticket to <span className='text-[#E16151]'>jonathan@email.com </span>and will send updates in the run up to the event.</p>
         
    </div>
    </>
  )
}

export default Ticket
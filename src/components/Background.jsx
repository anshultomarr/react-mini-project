import React from 'react'

const Background = () => {
  return (
    <>
        <div className='fixed z-2 h-screen w-full'>
            <div className='absolute top-[5%] flex w-full justify-center text-zinc-500 text-md font-semibold'>Documents</div>
            <h1 className='leading-none tracking-tighter font-bold text-[12vw] absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-zinc-800'>Docs.</h1>
        </div>
    </>
  )
}

export default Background
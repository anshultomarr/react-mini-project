import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { motion, scale } from "motion/react"

const Cards = ({data, reference}) => {
  return (
    <>
        <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} className='relative h-64 w-48 bg-zinc-400/70 rounded-4xl p-5 overflow-hidden'>
            <FaRegFileAlt/>
            <p className='text-sm leading-tight mt-5 font-semibold  '>{data.description}</p>
            <div className='footer w-full absolute bottom-0 left-0 '>
                <div className='flex items-center justify-between mb-3 px-5'>
                    <p className='font-semibold'>{data.filesize}</p>
                    <span className='w-5 h-5 flex justify-center items-center rounded-full bg-zinc-200'>
                        {data.close? <FiDownload/>: <IoCloseSharp/>}
                    </span>
                </div>
                {
                    data.tag.isOpen && (
                        <div className={`w-full py-3 ${data.tag.tagColor === "blue"? "bg-blue-600/60" : "bg-green-600/60"} flex justify-center items-center`}>
                            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                        </div>
                    )
                }
                
            </div>
        </motion.div>
    </>
  )
}

export default Cards
import React, { useRef } from 'react'
import Cards from './Cards'

const Foreground = () => {
    const ref = useRef(null)
    const data = [
        {description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, praesentium.",
        filesize: "0.8mb",
        close: false,
        tag: {isOpen: false, tagTitle: "Download now", tagColor: "green"}},

        {description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, praesentium.",
        filesize: "0.4mb",
        close: true,
        tag: {isOpen: true, tagTitle: "Download now", tagColor: "green"}},

        {description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, praesentium.",
        filesize: "0.9mb",
        close: false,
        tag: {isOpen: true, tagTitle: "Download now", tagColor: "blue"}}
    ]
  return (
    <>
        <div ref={ref} className='w-full h-full z-3 fixed left-0 top-0 flex gap-5 flex-wrap'>
            {data.map((item, index)=>(
                <Cards reference={ref} data={item}/>
            ))}
        </div>
    </>
  )
}

export default Foreground
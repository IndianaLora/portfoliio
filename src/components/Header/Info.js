//rafce
import React from 'react'
import CV from "../../assest/Indiana 2022 Resume.pdf"
const Info = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn' >Download my CV</a>
            <a href="#contact" className='btn btn-primary'>Contact me</a>
        </div>
    )
}

export default Info
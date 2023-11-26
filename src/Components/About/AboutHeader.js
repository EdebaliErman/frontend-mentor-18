import React from 'react'
import Card from './Card'

function AboutHeader() {
    return (
        <div className='AboutHeader'>
            <div className='AboutHeaderTitle'>
                <h1>Stay productive, wherever you are</h1>
                <h3>Never let location be an issue when accesing your files. Fylo has you covered for all of your file storage needs.</h3>
                <h3>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!</h3>
                <div className='SeeTitle'>
                    <h3>See how Fylo works</h3>
                    <img className='w-8' src={process.env.PUBLIC_URL+"/assets/icon-arrow.svg"} alt='svg'/>
                </div>
            </div>
            <Card />
        </div>
    )
}

export default AboutHeader

import React from 'react'

function Card() {
    return (
        <div className='Card'>
            <img src={process.env.PUBLIC_URL + "./assets/icon-quotes.svg"} alt='svg' />
            <h4>Fylo has improved our team productivity by an order of magnitude. Since making the swicth our team has become a well-oiled collaboration machine.</h4>
            <Profile />
        </div>
    )
}

const Profile = () => {
    return <div className='profile'>
        <img src={process.env.PUBLIC_URL + "/assets/avatar-testimonial.jpg"} alt='avatar' />
        <div>
            <h4>Kyle Burton</h4>
            <h5>Founder & CEO, Hunddle</h5>
        </div>
    </div>
}

export default Card

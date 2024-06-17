import React from 'react'
import right from '../Images/thao.jpg'

const ContactUs = () => {
    return (<>
        <div style={{ display: 'flex', paddingInline: "5vw" }}>
            <div className='left' style={{ flex: "1.5", display: "flex", alignItems: "center", margin: "10px" }}>
                <img src={right} alt="" style={{ width: "40vw" }} />
            </div>


            <div className="right" style={{ flex: "2", display: "flex", flexDirection: "column", margin: "10px" }}>
                <h1>Contact Us</h1>
                <p>You can reach us anytime via support@beau_tified*sales.com</p>
                <form action="" style={{ display: "flex", flexDirection: "column", margin: "10px" }}>

                    <input type="text" placeholder="First Name" required />
                    <input type="text" placeholder='Last Name' />
                    <input type="text" placeholder="Email Address" required />
                    <textarea type="text" placeholder='Type your message here' required maxLength={180} />
                    <button>Get Started</button>
                </form>

            </div>
        </div>
    </>
    )
}

export default ContactUs
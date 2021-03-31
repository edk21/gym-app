import React from 'react'

function Contact() {
    return (
        <div id="contact">
            <h1>CONTACT US</h1>
            <form>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email Adress" required />
                <textarea name="message" id="" cols="30" rows="10" placeholder="Write here..."></textarea>
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}

export default Contact

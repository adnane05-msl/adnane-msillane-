import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className='contact page'>
            <div className='contact-titre'>
                <h2>Contact</h2>
            </div>
            <div>
                <h2 className='sous-titre'>Je suis toujours ouvert aux nouvelles opportunités, collaborations et discussions autour du développement web. N’hésitez pas à me contacter !</h2>
            </div>
            
            <div className='contact-form'>
                <form action="" className='form'>
                    <div className='input'>
                        <input type="text" placeholder='nom' required />
                    </div>
                    <div className='input'>
                        <input type="email" placeholder='email' required />
                    </div>
                    <div className='input'>
                        <textarea name="" id="" cols="30" rows="10" placeholder='message...' required></textarea>
                    </div>
                    <button type='submit' className='btn'>Envoyer</button>
                </form>
            </div>
        </div>
    )
}

export default Contact

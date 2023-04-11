import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { GoAlert as Caution } from 'react-icons/go'
import { BsLinkedin as Linkedin } from 'react-icons/bs'
import { useState } from 'react'
import emailjs from '@emailjs/browser';

export const ContactForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const [displayErr, setDisplayErr] = useState(false)
    const [isSent, setIsSent] = useState(false)

    const validate = async event => {
        event.preventDefault();
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (name === '' || email === '' || !(email.match(validRegex)) || subject === '' || message === '') {
            setDisplayErr(true)
        } else {
            submitForm()
        }
    }

    const submitForm = async () => {

        const templateParams ={
            name: name,
            email: email,
            subject: subject,
            message: message
        }

        emailjs.send('service_ec186hq', 'template_r0esrve', templateParams, 'LBhuU58PZzIyMCJ-Z')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        
        console.log("Message was sent!")
        setIsSent(true)
    }

    return (
        <>
            {(isSent === true ?
                <div className="section-container">
                    <h1><strong>CONTACT ME</strong></h1>
                    <div className="message-sent">
                        <h2><strong>Thank You for reaching out!</strong></h2>
                        <h4>Your message was successfully sent. I will try to reach back out as soon as I can.</h4>
                    </div>
                </div>
                :
                <div className="section-container">
                    <h1><strong>CONTACT ME</strong></h1>
                    <h4>Let's connect! I'd like to hear from you!<br />You can send me a message below, or reach out to me on <a href="https://linkedin.com/in/richard-duong-b371271a2/" target="_blank">
                        <Linkedin /> LinkedIn</a>!</h4>
                    <form onSubmit={validate}>
                        <input className="form" type='text' placeholder="Name"
                            onChange={(e) => setName(e.target.value)}
                            value={name} /><br />

                        <input className="form" type="email" placeholder="Your Email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email} /><br />

                        <input className="form" type='text' placeholder="Subject"
                            onChange={(e) => setSubject(e.target.value)}
                            value={subject} /><br />

                        <textarea className="form-ta" placeholder="Message"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message} /><br />
                        {(displayErr ? <label><Caution /> Your message has not been sent. Please make sure all fields are completed.</label> : null)}<br /><br />
                        <Button type="submit">Send Message</Button>
                    </form>
                </div>
            )}
        </>
    )
}
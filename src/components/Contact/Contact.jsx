import React,{useState, useRef, useEffect } from 'react'
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import AOS from "aos"
import './Contact.css'

const Contact = () => {
    useEffect(() => {
      AOS.init();
    }, [])
    const form = useRef();
    const [done, setDone] = useState(false)
    const [notDone, setNotDone] = useState(false)
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
        setDone(false)
        setNotDone(false)
    }

    const sendEmail = (e) => {
    e.preventDefault();
    
    if(!formData.reply_to ||!formData.message){
      setNotDone(true)
    } else {
      emailjs.send(
        "service_0az540f",
        "template_uti5wxk",
        {
          to_email: "giftedclan0305@gmail.com",
          from_name: formData.reply_to,
          to_name: "Customer",
          text_message: formData.message,
        },
        "Hq4kN7TiJgm_rh6iP"
      ).then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );      
    }
    };
    

    return(
        <Container style={{paddingTop: '50px'}} >
            <Row >
            <Col md={6} className="c-left" >
            <h1 >Get in Touch</h1>
            <h1 className="yellow">Contact me</h1>
            </Col>
            <Col md={6} className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                <input type="email" required name="reply_to" className="user" placeholder="Email" onChange={handleChange} />
                <textarea name="message" required className="user" placeholder="Message" onChange={handleChange} />
                <span className='not-done' >{notDone && "Please, fill all the input field"}</span>
                <Button type="submit" className="button" disabled={done}>Send</Button>
                <span className='done'>{done && "Thanks for contacting me and I will be in touch as soon as possible."}</span>
                </form>
            </Col>
            </Row>
        </Container>
    )
}

export default Contact
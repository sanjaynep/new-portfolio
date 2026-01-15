import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

export default function Contact() {

    let [issubmitting, setissubmitting] = useState(false)

    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setissubmitting(true);
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
         .then((result) => {
         toast.success("Message sent successfully");
        e.target.reset();
      })
      .catch((error) => {
        toast.error('Something went wrong!');
      })
      .finally(() => {
        setissubmitting(false);
      });

    }

    return (
        <>
            
            <section id="contact" className="skills-section">
                <div className="skills-inner">
                    <div className="section-heading">
                        <h2 className="skills-title">Contact Me</h2>
                    </div>
                    <div className="section-divider" />

                    <div className="contact-form-wrapper">
                        <Form onSubmit={handleOnSubmit}>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label className="contact-label">Email Address</Form.Label>
                                <Form.Control
                                    type="email"
                                    name='email'
                                    placeholder="name@example.com"
                                    className="contact-input"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formSubject">
                                <Form.Label className="contact-label">Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='username'
                                    placeholder="Your_name"
                                    className="contact-input"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formSubject">
                                <Form.Label className="contact-label">Subject</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='subject'
                                    placeholder="Subject title"
                                    className="contact-input"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formMessage">
                                <Form.Label className="contact-label">Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    name='message'
                                    placeholder="Write your message here..."
                                    className="contact-input"
                                    required
                                />
                            </Form.Group>

                            <div className="contact-btn-wrapper">
                                <Button type="submit" disabled={issubmitting} className="contact-submit-btn">
                                    {issubmitting ? "Sending Message" : "send message"}
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </section>
        </>
    )
}
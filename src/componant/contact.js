import React, { useState } from 'react'

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('subject', subject);
    localStorage.setItem('message', message);

    alert('submited successfully')
  }

  return (
    <>
      <section className="contact" id="contact">

        <h1 className="heading hed"><span>contact</span> us</h1>

        <div className="row">

          <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1632137920043!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>

          <form action="">
            <h3>get in touch</h3>
            <input type="text" placeholder="your name" className="inputBox" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="your email" className="inputBox" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="tel" placeholder="subject" className="inputBox" value={subject} onChange={(e) => setSubject(e.target.value)} />
            <textarea placeholder="your message" className="inputBox" cols="30" rows="10" value={message} onChange={(e) => setMessage(e.target.value)}  ></textarea>
            <input type="submit" value="send message" className="btn" onClick={handleSubmit} />
          </form>

        </div>

      </section>
    </>
  )
}

export default Contact

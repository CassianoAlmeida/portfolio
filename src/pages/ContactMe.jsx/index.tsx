import styles from './ContactMe.module.scss';
import emailjs from 'emailjs-com';
import { useState } from 'react';


export default function ContactMe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const serviceId = 'service_gkn7ny3';
    const templateId = 'template_hu99u5r';
    const userId = '9fCSn7jCxE5rx5wRn';

    if(name === '' || email === '' || message === '') {
      alert('missing values');
      return;
    }

    emailjs.send(serviceId, templateId, {
      from_name: name,
      from_email: email,
      message: message,
    }, userId)
      .then((result) => {
        console.log('Email sent successfully:', result);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
    
    setName('');
    setEmail('');
    setMessage('');

  };

  return (
    <main>
      <h1 className={styles.title}>Get in touch!</h1>
      <h2 className={styles.phrase}>{'Questions? Suggestions? Constructive critcism? Let\'s talk :)'}</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.form__iputContainers}>
          <label className={styles.form__label} htmlFor="name">Name:</label>
          <input 
            className={styles.form__input} 
            type="text" 
            id="name" 
            name='name' 
            value={name}
            placeholder='name'
            onChange={(event) => setName(event.target.value)} 
          />
          <label className={styles.form__label} htmlFor="email">Email:</label>
          <input 
            className={styles.form__input} 
            type="email" 
            id="email" 
            name='email' 
            value={email}
            placeholder='email'
            onChange={(event) => setEmail(event.target.value)} 
          />
        </div>
        <label className={styles.form__label} htmlFor="message">Message:</label>
        <div className={styles.form__textareaContainer}>
          <textarea 
            className={styles.form__textarea} 
            id="message" 
            value={message}
            placeholder='message'
            onChange={(event) => setMessage(event.target.value)} 
          />
        </div>
        <button className={styles.form__button} type="submit">send</button>
      </form>
    </main>
  );
}
import styles from './ContactMe.module.scss';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';


export default function ContactMe() {
  const { t } = useTranslation();

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
      <h1 className={styles.title}>{t('contact.title')}</h1>
      <h2 className={styles.phrase}>{t('contact.phrase')}</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.form__iputContainers}>
          <label className={styles.form__label} htmlFor="name">{t('contact.nameLabel')}</label>
          <input 
            className={styles.form__input} 
            type="text" 
            id="name" 
            name='name' 
            value={name}
            placeholder={t('contact.namePlaceholder') as string}
            onChange={(event) => setName(event.target.value)} 
          />
          <label className={styles.form__label} htmlFor="email">{t('contact.emailLabel')}</label>
          <input 
            className={styles.form__input} 
            type="email" 
            id="email" 
            name='email' 
            value={email}
            placeholder={t('contact.emailPlaceholder') as string}
            onChange={(event) => setEmail(event.target.value)} 
          />
        </div>
        <label className={styles.form__label} htmlFor="message">{t('contact.messageLabel')}</label>
        <div className={styles.form__textareaContainer}>
          <textarea 
            className={styles.form__textarea} 
            id="message" 
            value={message}
            placeholder={t('contact.messagePlaceholder') as string}
            onChange={(event) => setMessage(event.target.value)} 
          />
        </div>
        <button className={styles.form__button} type="submit">{t('contact.buttonText')}</button>
      </form>
    </main>
  );
}
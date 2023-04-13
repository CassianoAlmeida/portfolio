import Router from './routes';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationPT from './locales/pt/translation.json';
import translationES from './locales/es/translation.json';

const resources = {
  EN: {
    translation: translationEN
  },
  PT: {
    translation: translationPT
  },
  ES: {
    translation: translationES
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'EN',
  interpolation: {
    escapeValue: false
  }
});

function App() {

  return (
    <I18nextProvider i18n={i18n}>
      <Router />
    </I18nextProvider>
  );
}

export default App;

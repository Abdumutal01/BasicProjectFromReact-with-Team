import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import lngUz from './Translation/uz.json'
import lngEn from './Translation/en.json'

const resources = {

    uz: {
        translation: lngUz
    },
    en: {
        translation: lngEn
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "uz",
        fallbackLng: "uz",
        interpolation: {
            escapeValue: false
        }
    });
export default i18n
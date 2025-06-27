import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            exportTitle: 'Export of Fresh, Dried, and Freeze-Dried Fruits and Vegetables from Uzbekistan',
            exportDesc: 'Deliveries from the holder of the title "The best exporter of fruits and vegetables of Uzbekistan"',
            aboutTitle: 'About company',
            aboutDesc: 'Fruit Voyage is a part of the Exim Agro Group and was established in 2019. We export fresh, dried, and freeze-dried fruits, vegetables, and berries from all regions of Uzbekistan. Our shipments reach customers in Japan, Russia, Latvia, and other countries across Europe and Asia.',
            Home: 'Home',
            Products: 'Products',
            Contact: 'Contact',
            exports: 'Years of reliable exports of Uzbek products to global markets.',
            network: 'A network of partner farms across Uzbekistan.',
            geography: 'countries — Geography of Fresh, Dried, and Freeze-Dried Fruit and Vegetable Exports from Uzbekistan.',
            productsTitle: 'Our products',

            contactTitle: 'Contact',
            name: 'Name',
            namePlaceholder: 'Enter your name',
            phone: 'Phone Number',
            company: 'Company',
            companyPlaceholder: 'Enter your company name',
            message: 'Message',
            messagePlaceholder: 'Your message',
            submit: 'Submit',
            sending: 'Sending...',
            successMessage: 'Message sent successfully!',
            errorMessage: 'An error occurred!',

            validation: {
                requiredName: 'Name is required',
                minName: 'Name must be at least 3 characters',
                requiredPhone: 'Phone number is required',
                invalidPhone: 'Enter a valid phone number: +9989XXXXXXXX',
                requiredEmail: 'Email is required',
                invalidEmail: 'Enter a valid email',
                requiredCompany: 'Company name is required',
                requiredMessage: 'Message is required',
                minMessage: 'Message must be at least 5 characters',
            },

            location: 'Republic of Uzbekistan, Fergana Region, Uchko‘prik District, Bog‘i Boston'
        }
    },
    ru: {
        translation: {
            exportTitle: 'Экспорт свежих, сушёных и сублимированных фруктов и овощей из Узбекистана.',
            exportDesc: 'Поставки от обладателя звания "Лучший экспортёр фруктов и овощей Узбекистана"',
            aboutTitle: 'О компании',
            aboutDesc: 'Fruit Voyage является частью группы Exim Agro и была основана в 2019 году. Мы осуществляем экспорт свежих, сушёных и сублимированных фруктов, овощей и ягод из всех регионов Узбекистана. Наша продукция поставляется в Японию, Россию, Латвию, а также в другие страны Европы и Азии.',
            Home: 'Главная',
            Products: 'Продукты',
            Contact: 'Контакты',
            exports: 'лет надёжных поставок продукции из Узбекистана на международные рынки.',
            network: 'партнеров фермерский-хозяйств по всему Узбекистану',
            geography: 'cтраны — География экспорта свежих, сушёных и сублимированных фруктов и овощей из Узбекистана.',
            productsTitle: 'Наши продукты',

            contactTitle: 'Контакты',
            name: 'Имя',
            namePlaceholder: 'Введите ваше имя',
            phone: 'Телефон',
            company: 'Компания',
            companyPlaceholder: 'Название компании',
            message: 'Сообщение',
            messagePlaceholder: 'Ваше сообщение',
            submit: 'Отправить',
            sending: 'Отправляется...',
            successMessage: 'Сообщение успешно отправлено!',
            errorMessage: 'Произошла ошибка!',

            validation: {
                requiredName: 'Имя обязательно',
                minName: 'Имя должно содержать минимум 3 символа',
                requiredPhone: 'Телефон обязателен',
                invalidPhone: 'Введите корректный номер: +9989XXXXXXXX',
                requiredEmail: 'Email обязателен',
                invalidEmail: 'Введите корректный Email',
                requiredCompany: 'Название компании обязательно',
                requiredMessage: 'Сообщение обязательно',
                minMessage: 'Сообщение должно содержать минимум 5 символов',
            },

            location: 'Республика Узбекистан, Ферганская область, Учкуприкский район, Богибостан'
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      exportTitle: 'Export of dried and freeze-dried fruits, berries, and nuts from Uzbekistan.',
      exportDesc:
        'Fruit Voyage is part of Exim Agro Group - the holder of the title \n' +
        '“The Best Exporter of Fruits and Vegetables of Uzbekistan”',
      aboutTitle: 'About company',
      aboutDesc:
        'Fruit Voyage is a part of the Exim Agro Group and was established in 2019. We export fresh, dried, and freeze-dried fruits, vegetables, and berries from all regions of Uzbekistan. Our shipments reach customers in Japan, Russia, Latvia, and other countries across Europe and Asia.',
      Home: 'Home',
      Products: 'Products',
      Contact: 'Contacts',
      News: 'News',
      exports: 'Years of reliable exports of Uzbek products to global markets.',
      network: 'tons of products exported in 2024.',
      geography:
        'our exports cover Japan, the UK, Sweden, Russia, Germany, Latvia, Poland, the UAE, and more',
      productsTitle: 'Our products',
      certificates: 'Certificates',

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

      procurementPeriod: 'Procurement period:',
      grade: 'Grade:',
      type: 'Type:',
      quantityBased: 'Minimum order:',
      harvestSeason: 'Harvers season:',
      madeIn: 'Made in:',
      caliber: 'Caliber:',

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

      location: 'Republic of Uzbekistan, Fergana Region, Uchko‘prik District, Bog‘i Boston',

      news: 'News',
      allNews: 'All news',
      moreDetails: 'More details',
      more: 'All products',
    },
  },
  ru: {
    translation: {
      exportTitle: 'Экспорт сушёных и сублимированных фруктов, ягод и орехов из Узбекистана.',
      exportDesc:
        'Fruit Voyage входит в группу компаний Exim Agro Group - обладателя награды\n' +
        '"Лучший экспортёр фруктов и овощей Узбекистана"',
      aboutTitle: 'О компании',
      aboutDesc:
        'Fruit Voyage является частью группы Exim Agro и была основана в 2019 году. Мы осуществляем экспорт свежих, сушёных и сублимированных фруктов, овощей и ягод из всех регионов Узбекистана. Наша продукция поставляется в Японию, Россию, Латвию, а также в другие страны Европы и Азии.',
      Home: 'Главная',
      Products: 'Продукты',
      Contact: 'Контакты',
      News: 'Новости',
      exports: 'лет надёжных поставок продукции из Узбекистана на международные рынки.',
      network: 'тонн продукции экспортировано в 2024 году.',
      geography:
        'наш экспорт охватывает Японию, Великобританию, Швецию, Россию, Германию, Латвию, Польшу, ОАЭ и др.',
      productsTitle: 'Наши продукты',
      certificates: 'Сертификаты',

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

      procurementPeriod: 'Срок заготовки:',
      grade: 'Сорт:',
      type: 'Тип:',
      quantityBased: 'Минимальный заказ:',
      harvestSeason: 'Сезон сбора:',
      madeIn: 'Произведено в:',
      caliber: 'Калибр:',

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

      location: 'Республика Узбекистан, Ферганская область, Учкуприкский район, Богибостан',

      news: 'Новости',
      allNews: 'Все новости',
      moreDetails: 'Подробнее',
      more: 'Все продукты',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

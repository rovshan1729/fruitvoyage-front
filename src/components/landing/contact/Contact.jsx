import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { createContact } from 'src/services/contactService';

const Contact = () => {
  const { t } = useTranslation();
  const [showNotification, setShowNotification] = useState(false);
  const [loading, setLoading] = useState(false);

  const rules = {
    name: {
      required: t('validation.requiredName'),
      minLength: { value: 3, message: t('validation.minName') },
    },
    phone_number: {
      required: t('validation.requiredPhone'),
      pattern: {
        message: t('validation.invalidPhone'),
      },
    },
    email: {
      required: t('validation.requiredEmail'),
      pattern: {
        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
        message: t('validation.invalidEmail'),
      },
    },
    company: {
      required: t('validation.requiredCompany'),
    },
    message: {
      required: t('validation.requiredMessage'),
      minLength: { value: 5, message: t('validation.minMessage') },
    },
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await createContact(data);
      if (res.status === 201) {
        setShowNotification(true);
        reset();
        setTimeout(() => setShowNotification(false), 3000);
      }
    } catch (error) {
      console.error(error);
      alert(t('errorMessage'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='relative'>
      {showNotification && (
        <div className='animate-fade-in-out fixed right-6 bottom-6 z-50 rounded-xl bg-green-500 px-6 py-4 text-white shadow-lg'>
          ✅ {t('successMessage')}
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='mx-auto my-10 w-full max-w-3xl space-y-6 rounded-lg bg-white px-4 py-8 shadow-lg sm:px-6 lg:px-8'
      >
        <h2 className='mb-4 text-center text-3xl font-semibold sm:text-4xl'>{t('contactTitle')}</h2>

        <div>
          <label className='mb-1 block text-base sm:text-lg'>{t('name')}</label>
          <Controller
            name='name'
            control={control}
            rules={rules.name}
            render={({ field }) => (
              <Input {...field} size='large' placeholder={t('namePlaceholder')} />
            )}
          />
          {errors.name && <p className='mt-1 text-sm text-red-500'>{errors.name.message}</p>}
        </div>

        <div>
          <label className='mb-1 block text-base sm:text-lg'>{t('phone')}</label>
          <Controller
            name='phone_number'
            control={control}
            rules={rules.phone_number}
            render={({ field }) => (
              <Input
                {...field}
                size='large'
                placeholder={t('phone')}
                value={field.value || ''}
                onChange={(e) => {
                  let val = e.target.value;
                  if (val === '+') {
                    field.onChange(val);
                    return;
                  }
                  if (val.startsWith('+')) {
                    const parts = val.split('+');
                    const numbers = parts[1] ? parts[1].replace(/\D/g, '') : '';
                    val = '+' + numbers;
                  } else {
                    val = val.replace(/\D/g, '');
                  }
                  field.onChange(val);
                }}
              />
            )}
          />
          {errors.phone_number && (
            <p className='mt-1 text-sm text-red-500'>{errors.phone_number.message}</p>
          )}
        </div>

        <div>
          <label className='mb-1 block text-base sm:text-lg'>Email</label>
          <Controller
            name='email'
            control={control}
            rules={rules.email}
            render={({ field }) => <Input {...field} size='large' placeholder='example@mail.com' />}
          />
          {errors.email && <p className='mt-1 text-sm text-red-500'>{errors.email.message}</p>}
        </div>

        <div>
          <label className='mb-1 block text-base sm:text-lg'>{t('company')}</label>
          <Controller
            name='company'
            control={control}
            rules={rules.company}
            render={({ field }) => (
              <Input {...field} size='large' placeholder={t('companyPlaceholder')} />
            )}
          />
          {errors.company && <p className='mt-1 text-sm text-red-500'>{errors.company.message}</p>}
        </div>

        <div>
          <label className='mb-1 block text-base sm:text-lg'>{t('message')}</label>
          <Controller
            name='message'
            control={control}
            rules={rules.message}
            render={({ field }) => (
              <Input.TextArea
                {...field}
                size='large'
                rows={4}
                placeholder={t('messagePlaceholder')}
              />
            )}
          />
          {errors.message && <p className='mt-1 text-sm text-red-500'>{errors.message.message}</p>}
        </div>

        <Button
          type='primary'
          htmlType='submit'
          className='!py-5 !text-base !font-semibold sm:!text-lg'
          block
          loading={loading}
        >
          {loading ? t('sending') : t('submit')}
        </Button>
      </form>
    </div>
  );
};

export default Contact;

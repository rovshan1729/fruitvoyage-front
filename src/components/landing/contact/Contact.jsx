import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button } from 'antd';
import { createContact } from 'src/services/contactService';

const rules = {
  name: {
    required: 'Ismingizni kiritishingiz kerak',
    minLength: { value: 3, message: 'Ism kamida 3 ta harf bo‘lishi kerak' },
  },
  phone: {
    required: 'Telefon raqami majburiy',
    pattern: {
      value: /^\+998(9[0-9]{8})$/,
      message: 'Telefon raqamini to‘liq va to‘g‘ri kiriting: +9989XXXXXXXX',
    },
  },
  email: {
    required: 'Email majburiy',
    pattern: {
      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
      message: 'To‘g‘ri email kiriting',
    },
  },
  company: {
    required: 'Kompaniya nomi majburiy',
  },
  message: {
    required: 'Xabar matni majburiy',
    minLength: { value: 5, message: 'Kamida 5 ta belgidan iborat bo‘lishi kerak' },
  },
};

const Contact = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    
    setLoading(true);
    try {
      const res = await createContact(data);
      if (res.status === 201) {
        setShowNotification(true);
        reset();

        setTimeout(() => {
          setShowNotification(false);
        }, 3000);
      }
    } catch (error) {
      console.error(error);
      alert("Xatolik yuz berdi!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {showNotification && (
        <div className="fixed bottom-6 right-6 z-50 rounded-xl bg-green-500 px-6 py-4 text-white shadow-lg animate-fade-in-out">
          ✅ Xabar muvaffaqiyatli yuborildi!
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto my-10 w-full max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6 py-8 shadow-lg bg-white rounded-lg"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-4">Contact</h2>

        <div>
          <label className="block text-base sm:text-lg mb-1">Name</label>
          <Controller
            name="name"
            control={control}
            rules={rules.name}
            render={({ field }) => <Input {...field} size="large" placeholder="Имя" />}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-base sm:text-lg mb-1">Phone Number</label>
          <Controller
            name="phone_number"
            control={control}
            rules={rules.phone}
            render={({ field }) => (
              <Input
                {...field}
                size="large"
                placeholder="+998901234567"
                value={field.value || '+998'}
                onChange={(e) => {
                  // Faqat raqam va "+" belgilariga ruxsat beriladi
                  let val = e.target.value.replace(/[^\d+]/g, '');
                  // +998 boshlanishi majburiy
                  if (!val.startsWith('+998')) {
                    val = '+998';
                  }
                  field.onChange(val);
                }}
              />
            )}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-base sm:text-lg mb-1">Email</label>
          <Controller
            name="email"
            control={control}
            rules={rules.email}
            render={({ field }) => <Input {...field} size="large" placeholder="example@mail.com" />}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Company */}
        <div>
          <label className="block text-base sm:text-lg mb-1">Company</label>
          <Controller
            name="company"
            control={control}
            rules={rules.company}
            render={({ field }) => <Input {...field} size="large" placeholder="Компания" />}
          />
          {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>}
        </div>

        {/* Message */}
        <div>
          <label className="block text-base sm:text-lg mb-1">Message</label>
          <Controller
            name="message"
            control={control}
            rules={rules.message}
            render={({ field }) => (
              <Input.TextArea {...field} size="large" rows={4} placeholder="Message" />
            )}
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
        </div>

        <Button
          type="primary"
          htmlType="submit"
          className="!py-5 !font-semibold !text-base sm:!text-lg"
          block
          loading={loading}
        >
          {loading ? "Yuborilmoqda..." : "Отправить"}
        </Button>
      </form>
    </div>
  );
};

export default Contact;

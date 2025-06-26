import React from 'react';
import { Typography } from 'antd';
import { Controller } from 'react-hook-form';

const { Title } = Typography;

const ControlForm = ({ title, name, control, errors, rules, Component, ...rest }) => {
  return (
    <div className='mb-[26px]'>
      {title && (<Title level={5} className='capitalize'>{title}</Title>)}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) =>
      <Component {...field} 
        status={errors[`${name}`] ? 'error' : ''}
        {...rest}{...rest} />}
      />
      
      {errors[name] && (
        <p className='text-red-500 mt-1 text-sm'>{errors[name].message}</p>
      )}
    </div>
  );
};

export default ControlForm;

import React from 'react';
import { ErrorMessage, Form, Formik, Field } from 'formik';
import * as yup from 'yup';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';

import './checkout.css'

const validationSchena = yup.object().shape({
  firstName: yup
    .string()
    .required('First name is required')
    .max(50, 'Your first name is too long')
    .min(3, 'Your first name is too short'),
  lastName: yup
    .string()
    .required('Last name is required')
    .max(50, 'Your last name is too long')
    .min(3, 'Your last name is too short'),
  email: yup
    .string()
    .email('Your email is not valid')
    .max(62, 'Your email is too long')
    .optional(),
  phoneNumber: yup
    .string()
    .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid')
    .required('Phone number is required'),
  zip: yup
    .number()
    .typeError('Zip code is not valid')
    .max(9999999999, 'Zip code is too long')
    .min(10000, 'Zip code is too short')
    .required('Zip code is required')
    .positive('Zip code is not valid')
    .integer('Zip code is not valid'),
  address: yup
    .string()
    .required('Address line is required')
    .max(95, 'Address line is too long')
    .min(3, 'Address line is too short'),
  city: yup
    .string()
    .required('Street name is required')
    .max(35, 'Street name is too long')
    .min(3, 'Street name is too short')
})

export const Checkout = () => {
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <Formik
      validateOnChange={true}
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        zip: null,
        address: '',
        city: '',
      }}
      validationSchema={validationSchena}
    >
      {({ errors, touched }) => (
        <div className="checkout_container">
          <span>Checkout</span>
          <Form className="inputs_form">

            <div className='input_wrapper'>
              <label name='firstName'>First Name</label>
              <Field className='firstName_input' placeHolder='First Name' name='firstName' type='input' />
            </div>

            <div className='input_wrapper'>
              <label name='lastName'>Last Name</label>
              <Field className='lastName_input' name='lastName' type='input' placeHolder='Last Name' />
            </div>

            <div className='input_wrapper'>
              <label name='email'>Email</label>
              <Field className='email_input' name='email' type='input' placeHolder='Email' />
            </div>

            <div className='input_wrapper'>
              <label name='phoneNumber'>Phone number</label>
              <Field className='phoneNumber_input' name='phoneNumber' type='input' placeHolder='Phone Number' />
            </div>

            <div className='input_wrapper'>
              <label name='zip'>Zip code</label>
              <Field className='zip_input' name='zip' type='input' placeHolder='Zip-code' />
            </div>

            <div className='input_wrapper'>
              <label name='address'>Address Line</label>
              <Field className='address_input' name='address' type='input' placeHolder='Address line' />
            </div>

            <div className='input_wrapper'>
              <label name='city'>City Name</label>
              <Field className='city_input' name='city' type='input' placeHolder='City name' />
            </div>
          </Form>

          {
            Object.keys(errors)[0] && Object.keys(touched)[0]
              ? <div className="errors_container">
                <ErrorMessage name='firstName' component='div' className='error' />
                <ErrorMessage name='lastName' component='div' className='error' />
                <ErrorMessage name='email' component='div' className='error' />
                <ErrorMessage name='phoneNumber' component='div' className='error' />
                <ErrorMessage name='zip' component='div' className='error' />
                <ErrorMessage name='city' component='div' className='error' />
                <ErrorMessage name='address' component='div' className='error' />
              </div>
              : null
          }

          <div className="button_blocks">
            <button className='go_back' onClick={() => { history.goBack(); }}>Go Back</button>
            {
              Object.keys(errors)[0] && Object.keys(touched)[0] ?
                <button className='checkout_submit' disabled>Submit</button>
                :
                <Link to={`${match.path}/success`}>
                  <button className='checkout_submit'>Submit</button>
                </Link>
            }
          </div>
        </div>
      )}
    </Formik>
  )
}
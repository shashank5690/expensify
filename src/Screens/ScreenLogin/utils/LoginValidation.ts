import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string()
    .email('Invalid email address')
    .required('Email is required'),

  password: yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
    .matches(/\d/, 'Password must contain at least one number')
    .matches(/[!@#$%^&*()_+{}\[\]:;"'<>,.?~\\/-]/, 'Password must contain at least one special character')
    .required('Password is required'),
});
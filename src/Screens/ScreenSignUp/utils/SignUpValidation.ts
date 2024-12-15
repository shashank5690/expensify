import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  email:yup.string().email().required(),
  mobilenumber:yup.string().required().min(10),
  password:  yup.string().required().min(6),
  cnic: yup.string().required('cnic is required')
});
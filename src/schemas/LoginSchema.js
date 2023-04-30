import * as yup from 'yup';

const LoginSchema = yup.object({
  email: yup.string().email().min(6).required(),
  password: yup.string().min(6).required(),
});

export default LoginSchema;

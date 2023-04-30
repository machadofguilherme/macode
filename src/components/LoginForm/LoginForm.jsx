import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import LoginSchema from '../../schemas/LoginSchema';
import loginRequest from '../../utils/fetchApi';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const response = await loginRequest('/login', {
      email: data.email,
      password: data.password,
    });

    const adminData = {
      author: response.admin.author,
      email: response.admin.email,
      token: response.adminToken.token
    };

    localStorage.setItem('admin', JSON.stringify(adminData));
    navigate('/admin');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section>
        <input type='email' placeholder="E-Mail" {...register('email')} />
        <p>{errors.email?.message}</p>
      </section>

      <section>
        <input type='password' placeholder="Senha" {...register('password')} />
        <p>{errors.password?.message}</p>
      </section>

      <button type="submit">Entrar</button>
    </form>
  );
};

export default LoginForm;
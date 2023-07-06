import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import LoginSchema from '../../schemas/LoginSchema';
import { dataRequest } from '../../utils/fetchApi';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const response = await dataRequest('/login', {
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-screen h-eighty-six flex justify-center items-center'
    >
      <div className='flex flex-col justify-center items-center gap-4'>
        <section>
          <input
            type='email'
            placeholder="E-Mail" {...register('email')}
            className='p-2 bg-lime-500 placeholder:text-black text-black rounded-md font-medium focus:ring-black focus:border focus:border-black focus:border-solid'
          />

          <p className='text-red-700 font-semibold text-center'>
            {errors.email?.message}
          </p>
        </section>

        <section>
          <input
            type='password'
            placeholder="Senha" {...register('password')}
            className='p-2 bg-lime-500 placeholder:text-black text-black rounded-md font-medium focus:ring-black focus:border focus:border-black focus:border-solid'
          />

          <p className='text-red-700 font-semibold text-center'>
            {errors.password?.message}
          </p>
        </section>

        <button
          type="submit"
          className='block w-full bg-lime-950 h-8 rounded-md text-lg font-semibold text-stone-50 transition-colors hover:bg-black'>
          Entrar
        </button>
      </div>
    </form>
  );
};

export default LoginForm;

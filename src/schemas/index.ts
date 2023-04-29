import * as Yup from 'yup';

export const signInSchema = Yup.object().shape({
  email: Yup.string().email('Некорректный Email').required('Введите Email'),
  password: Yup.string().required('Введите Пароль')
});

export const signUpSchema = Yup.object().shape({
  email: Yup.string().email('Некорректный Email').required('Введите Email'),
  password: Yup.string()
    .min(8)
    .max(50)
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{8,}/, 'Ваш пароль слишком простой')
    .required('Введите Пароль'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Пароли не совпадают'),
  name: Yup.string(),
  lastname: Yup.string(),
  city: Yup.string(),
  phone: Yup.string()
});

export const EditProfileSchema = Yup.object().shape({
  name: Yup.string().required('Заполните имя'),
  lastname: Yup.string(),
  city: Yup.string(),
  phone: Yup.string()
});

export const NewAdSchema = Yup.object().shape({
  title: Yup.string().required('Заполните поле'),
  description: Yup.string().required('Заполните поле'),
  price: Yup.number().typeError('Только числа').required('Заполните поле'),
  files: Yup.mixed()
});

export const EditAdSchema = Yup.object().shape({
  title: Yup.string().required('Заполните поле'),
  description: Yup.string().required('Заполните поле'),
  price: Yup.number().typeError('Только числа').required('Заполните поле')
});

export const ReviewSchema = Yup.object().shape({
  text: Yup.string().min(3).required('Заполните поле')
});

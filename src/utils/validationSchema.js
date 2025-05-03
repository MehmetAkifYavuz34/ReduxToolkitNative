import * as Yup from 'yup';

export const newUserSchema = Yup.object().shape({
  name: Yup.string().required('Zorunlu alan'),
  surname: Yup.string().required('Zorunlu alan'),
  phoneNumber: Yup.string()

    .max(20, 'Max 20 rakam')
    .min(11, 'min 11 rakam')
    .required('Zorunlu alan'),
  email: Yup.string().email('invalid email adress').required('Zorunlu alan'),
  gender: Yup.string().required('Zorunlu alan'),
  age: Yup.number().min(18, 'min 18').max(80, 'max 80'),
});

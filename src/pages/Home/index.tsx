import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { pt } from 'yup-locale-pt';

/* Component's */
import { Input } from '@/components/Input';

const initial = {
  name: '',
  address: '',
  phone: '',
  email: '',
  date: '',
};

const error = {
  name: 'É necessário preencher o seu nome.',
  address: 'É necessário preencher o seu endereço.',
  phone: 'É necessário preencher o seu telefone.',
  email: 'É necessário preencher o seu e-mail.',
  date: 'É necessário preencher a sua data de nascimento corretamente.',
};

const schema = yup.object().shape({
  name: yup.string().required(error.name),
  address: yup.string().required(error.address),
  phone: yup.number().required(error.phone),
  email: yup.string().email().required(error.email),
  date: yup.date().required(error.date),
});

export const Home = () => {
  yup.setLocale(pt);

  const renderError = (message: string) => (
    <div className='alert alert-danger' role='alert'>
      {message}
    </div>
  );

  const handleSubmit = async () => {};

  return (
    <div className='align-middle mx-auto mt-5' style={{ width: '50%' }}>
      <div className='card'>
        <h5 className='card-header'>Cadastro</h5>
        <div className='card-body'>
          <Formik
            initialValues={initial}
            validationSchema={schema}
            onSubmit={async (_values, { resetForm }) => {
              await handleSubmit();
              resetForm();
            }}
          >
            <Form>
              <Input id='name' label='Nome' placeholder='Digite seu nome...' />
              <ErrorMessage name='name' render={renderError} />
              <Input id='address' label='Endereço' placeholder='Digite seu endereço...' />
              <ErrorMessage name='address' render={renderError} />
              <Input id='phone' label='Telefone' placeholder='Digite seu telefone...' type='tel' />
              <ErrorMessage name='phone' render={renderError} />
              <Input id='email' label='E-mail' placeholder='Digite seu e-mail...' type='email' />
              <ErrorMessage name='email' render={renderError} />
              <Input
                id='date'
                label='Data de Nascimento'
                placeholder='Digite sua data de nascimento...'
                type='date'
              />
              <ErrorMessage name='date' render={renderError} />

              <button type='submit' className='btn btn-primary'>
                Enviar
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

import { InputHTMLAttributes } from 'react';
import { Field } from 'formik';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

export const Input = (props: InputProps) => {
  const { id, label, ...rest } = props;

  return (
    <div className='mb-3'>
      <label htmlFor={id} className='form-label'>
        {label}
      </label>
      <div className='control'>
        <Field id={id} name={id} className='form-control' {...rest} />
      </div>
    </div>
  );
};

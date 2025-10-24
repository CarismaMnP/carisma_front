import s from './TitledInput.module.css';
import { FC, HTMLProps } from 'react';

interface ITitledInputProps extends HTMLProps<HTMLInputElement> {
  error?: string;
  required?: boolean;
}

export const TitledInput: FC<ITitledInputProps> = ({ title, error, required = false, ...props }) => {
  return (
    <div className={s.wrapper}>
      <input {...props} className={s.titled_input}></input>
      {required && <div className={s.required}></div>}
      {error && <p className={s.error}>{error}</p>}
    </div>
  );
};

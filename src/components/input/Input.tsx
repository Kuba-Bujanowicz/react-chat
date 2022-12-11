import { InputHTMLAttributes } from 'react';
import Spinner from '../spinner/Spinner';

type Props = {
  isLoading: boolean;
};

const Input: React.FC<InputHTMLAttributes<HTMLInputElement> & Props> = ({ isLoading, ...rest }) => {
  return (
    <div className='input'>
      <input {...rest} />
      {isLoading && (
        <div className='input__spinner'>
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default Input;

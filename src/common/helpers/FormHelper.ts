import { Api } from '../base/Api';

export class FormHelper<T, E> {
  state: T;
  setErrors: React.Dispatch<React.SetStateAction<E>>;
  setState: React.Dispatch<React.SetStateAction<T>>;

  constructor(state: T, setState: React.Dispatch<React.SetStateAction<T>>, setErrors: React.Dispatch<React.SetStateAction<E>>) {
    this.state = state;
    this.setState = setState;
    this.setErrors = setErrors;
  }

  bindText(name: string) {
    return (e: React.ChangeEvent<HTMLInputElement>) => this.setState({ ...this.state, [name]: e.target.value });
  }
}

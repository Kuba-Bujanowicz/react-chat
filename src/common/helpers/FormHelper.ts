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

  bindSubmit(url: string) {
    return async (e: React.FormEvent<HTMLFormElement>) => {
      console.log('Signing up...');

      e.preventDefault();
      e.stopPropagation();
      try {
        const response = await Api.post(url, this.state);
        console.log(response);
      } catch (error: any) {
        console.log(error);

        this.setErrors(error.response.data);
      }
    };
  }
}

export class FormHelper<T> {
  private setState: React.Dispatch<React.SetStateAction<T>>;

  constructor(setState: React.Dispatch<React.SetStateAction<T>>) {
    this.setState = setState;
  }

  bindText(name: string) {
    return (e: React.ChangeEvent<HTMLInputElement>) => this.setState((prevState) => ({ ...prevState, [name]: e.target.value }));
  }

  bindSubmit(cb: Function) {
    return (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      e.stopPropagation();
      cb();
    };
  }
}

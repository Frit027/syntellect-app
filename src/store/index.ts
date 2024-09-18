import { makeObservable, observable, action } from 'mobx';

export class Store {
  @observable value = '';

  constructor() {
    makeObservable(this);
  }

  @action
  setValue = (newValue: string) => {
    this.value = newValue;
  };

  @action
  clear = () => {
    this.value = '';
  };

  alertValue = () => alert(this.value);

  alertIfNumber = () => {
    const numberRegExp = /^-?\d+(\.?\d+)?$/;
    if (numberRegExp.test(this.value)) {
      alert(this.value);
    }
  };
}

export const store1 = new Store();
export const store2 = new Store();

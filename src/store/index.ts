import { makeObservable, observable, action } from 'mobx';

export class Store {
  value = '';

  constructor() {
    makeObservable(this, {
      value: observable,
      setValue: action,
      clear: action,
    });
  }

  setValue(newValue: string) {
    this.value = newValue;
  }

  clear() {
    this.value = '';
  }

  alertValue() {
    alert(this.value);
  }
}

export const store1 = new Store();
export const store2 = new Store();

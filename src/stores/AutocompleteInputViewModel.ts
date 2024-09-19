import { makeObservable, observable, action, flow } from 'mobx';
import { CountryInfo, getCountryByName } from '../api/apiService';

export class AutocompleteInputViewModel {
  @observable value = '';
  @observable countries: CountryInfo[] = [];
  @observable state = 'pending';

  constructor() {
    makeObservable(this);
  }

  @action
  setValue = (newValue: string) => {
    this.value = newValue;
    this.fetch();
  };

  @flow
  *fetch() {
    this.state = 'pending'
    try {
      const data: CountryInfo[] = yield getCountryByName(this.value)
      this.state = 'done';
      this.countries = data;
    } catch (error) {
      this.state = 'error';
      console.error(error);
    }
  }
}
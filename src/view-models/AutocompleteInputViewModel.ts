import {action, flow, makeObservable, observable} from 'mobx';
import {CountryInfo, getCountryByName} from '../api/apiService';

/**
 * ViewModel для контрола-автокомплита
 */
export class AutocompleteInputViewModel {
  // значение инпута
  @observable value = '';

  // массив стран
  @observable countries: CountryInfo[] = [];

  // ID таймера
  timerId: NodeJS.Timeout | null = null;

  constructor() {
    makeObservable(this);
  }

  /**
   * Установка нового значения для value. Используем небольшую задержку, чтобы не запрашивать данные с сервера
   * при каждом изменении значения инпута.
   * @param {string} newValue - Новое значение
   */
  @action
  setValue = (newValue: string) => {
    this.value = newValue;
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
    this.timerId = setTimeout(() => this.fetchData(), 500);
  };

  /**
   * Асинхронное получение массива стран по API
   */
  @flow
  *fetchData() {
    try {
      this.countries = yield getCountryByName(this.value);
    } catch (error) {
      console.error(error);
    }
  }
}
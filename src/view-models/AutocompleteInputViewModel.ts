import { action, makeObservable, observable } from 'mobx';
import { LoadingStatus } from '../common/constants';
import { CountryInfo, getCountryByName } from '../api/apiService';

/**
 * ViewModel для контрола-автокомплита
 */
export class AutocompleteInputViewModel {
  // значение инпута
  @observable value = '';

  // массив стран
  @observable countries: CountryInfo[] = [];

  // статус загрузки данных по API
  @observable state = LoadingStatus.Idle;

  // ID таймера
  timerId: NodeJS.Timeout | null = null;

  // последний созданный промис
  lastPromise: Promise<CountryInfo[]> | null = null;

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
    if (this.timerId) {
      clearTimeout(this.timerId);
    }

    this.value = newValue;
    if (!this.value) {
      this.countries = [];
      return;
    }

    this.timerId = setTimeout(() => this.fetchData(), 500);
  };

  /**
   * Асинхронное получение массива стран по API
   */
  @action
  fetchData() {
    this.countries = [];

    const currentPromise = getCountryByName(this.value);
    this.lastPromise = currentPromise;

    this.state = LoadingStatus.Loading;

    currentPromise.then(
      action('fetchSuccess', (data) => {
        if (currentPromise === this.lastPromise) {
          this.countries = data;
          this.state = LoadingStatus.Idle;
        }
      }),
      action('fetchError', (error) => {
        if (currentPromise === this.lastPromise) {
          console.error(error);
          this.state = LoadingStatus.Error;
        }
      }),
    );
  }
}

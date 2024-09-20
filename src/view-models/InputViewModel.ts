import { makeObservable, observable, action } from 'mobx';

/**
 * ViewModel для текстового контрола с кнопками
 */
export class InputViewModel {
  // значение инпута
  @observable value = '';

  constructor() {
    makeObservable(this);
  }

  /**
   * Установка нового значения для value
   * @param {string} newValue - Новое значение
   */
  @action
  setValue = (newValue: string) => {
    this.value = newValue;
  };

  /**
   * Очистка value
   */
  @action
  clear = () => {
    this.value = '';
  };

  /**
   * Показ сообщения со значением value
   */
  alertValue = () => alert(this.value);

  /**
   * Показ сообщения, если значение value является числом
   */
  alertIfNumber = () => {
    const numberRegExp = /^-?\d+(\.?\d+)?$/;
    if (numberRegExp.test(this.value)) {
      alert(this.value);
    }
  };
}

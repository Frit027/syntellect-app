/**
 * Имена CSS-классов общих HTML-элементов
 */
export const classes = {
  input: 'input',
};

/**
 * Состояние загрузки данных с сервера
 */
export enum LoadingStatus {
  Idle = 'IDLE',
  Loading = 'LOADING',
  Error = 'ERROR',
}

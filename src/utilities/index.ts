/**
 * Генерация рандомного ID
 * @returns {string} ID в шестнадцатеричной системе счисления
 */
export const generateID = (): string => Math.random().toString(16).slice(2);

/**
 * Debounce-функция, которая выполняет только последний колбэк за указанный период времени
 * @param {() => void} callback - Колбэк, который нужно выполнить
 * @param {number} [timeout=500] - Время ожидания
 * @returns {() => void} Функция, выполняемая 1 раз за указанный промежуток времени
 */
export function getDebounceFunction(callback: () => void, timeout: number = 500): () => void {
  let timerId: NodeJS.Timeout | null = null;
  return function (this: any) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => callback.apply(this), timeout);
  };
}

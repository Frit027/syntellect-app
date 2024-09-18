/**
 * Генерация рандомного ID
 * @returns {string} ID в шестнадцатеричной системе счисления
 */
export const generateID = (): string => Math.random().toString(16).slice(2);

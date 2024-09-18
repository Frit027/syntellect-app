import { TProps } from './interfaces';

/**
 * Компонент, представляющий собой кнопку
 *
 * @component
 */
export const Button = ({ title, handleClick }: TProps) => <button onClick={handleClick} type='button'>{title}</button>;
import React from 'react';
import { InputViewModel } from '../../view-models';

/**
 * Тип для свойств кнопки
 */
type TButton = {
  // текст кнопки
  title: string,

  // обработчик клика по кнопке
  callback: React.MouseEventHandler<HTMLButtonElement>,
};

/**
 * Тип для пропсов компонента
 */
export type TProps = {
  // ViewModel для обновления и получения данных
  viewModel: InputViewModel,

  // свойства для левых кнопок
  leftButtons?: TButton[],

  // свойства для правых кнопок
  rightButtons?: TButton[],
};

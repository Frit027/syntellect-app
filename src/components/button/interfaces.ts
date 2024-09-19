import React from 'react';

/**
 * Тип для пропсов кнопки
 */
export type TProps = {
  // текст кнопки
  title: string,

  // обработчик клика по кнопке
  handleClick: React.MouseEventHandler<HTMLButtonElement>,
};

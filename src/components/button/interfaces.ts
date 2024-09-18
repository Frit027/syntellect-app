import React from 'react';

/**
 * Пропсы кнопки
 */
export type TProps = {
  // текст кнопки
  title: string,

  // обработчик клика по кнопке
  handleClick: React.MouseEventHandler<HTMLButtonElement>,
};

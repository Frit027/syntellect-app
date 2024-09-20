import React from 'react';
import { observer } from 'mobx-react-lite';
import { Button } from '../button';
import { generateID } from '../../utilities';
import { classes as commonClasses } from '../../common/constants';
import { TProps } from './interfaces';
import { classes } from './constants';
import './index.css';

/**
 * Текстовый контрол, который позволяет настраивать и выводить разное кол-во кнопок слева и справа
 *
 * @component
 */
export const InputControl = observer(({ viewModel, leftButtons, rightButtons }: TProps) => {
  /**
   * Обработка изменения текста в инпуте
   * @param {React.ChangeEvent<HTMLInputElement>} e - Событие изменения текста в инпуте
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => viewModel.setValue(e.target.value);

  return <div className={classes.component}>
    {leftButtons?.length
      ? <div className={classes.buttons}>
        {leftButtons.map((button) => <Button key={generateID()} title={button.title} handleClick={button.callback} />)}
      </div>
      : null}
    <input className={commonClasses.input} value={viewModel.value} onChange={handleChange} type='text' />
    {rightButtons?.length
      ? <div className={classes.buttons}>
        {rightButtons.map((button) => <Button key={generateID()} title={button.title} handleClick={button.callback} />)}
      </div>
      : null}
  </div>;
});

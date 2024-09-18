import React from 'react';
import { observer } from 'mobx-react-lite';
import { TProps } from './interfaces';
import { Button } from '../button';
import { classes } from './constants';
import { generateID } from '../../utilities';
import './index.css';

export const InputControl = observer(({ viewModel, leftButtons, rightButtons }: TProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => viewModel.setValue(e.target.value);

  return <div className={classes.component}>
    {leftButtons
      ? <div>
          {leftButtons.map((button) => <Button key={generateID()} title={button.title} handleClick={button.callback}/>)}
        </div>
      : null}
    <input value={viewModel.value} onChange={handleChange} type='text'/>
  {rightButtons
    ? <div>
        {rightButtons.map((button) => <Button key={generateID()} title={button.title} handleClick={button.callback}/>)}
      </div>
    : null}
  </div>;
});

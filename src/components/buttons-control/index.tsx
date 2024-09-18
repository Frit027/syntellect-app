import React from 'react';
import { observer } from 'mobx-react-lite';
import { TProps } from './interfaces';
import { Button } from '../button';
import { classes } from './constants';
import './index.css';

export const ButtonsControl = observer(({ store, leftButtons, rightButtons }: TProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => store.setValue(e.target.value);

  return <div className={classes.component}>
    <div>
      {leftButtons
        ? leftButtons.map((button) => <Button title={button.title} handleClick={button.callback}/>)
        : null}
    </div>
    <input value={store.value} onChange={handleChange} type='text'/>
    <div>
    {rightButtons
      ? rightButtons.map((button) => <Button title={button.title} handleClick={button.callback}/>)
      : null}
    </div>
  </div>;
});

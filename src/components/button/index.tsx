import React from 'react';
import { TProps } from './interfaces';
import { classes } from './constants';
import './index.css';

/**
 * Компонент, представляющий собой кнопку
 *
 * @component
 */
export const Button = ({ title, handleClick }: TProps) => (
  <button className={classes.component} onClick={handleClick} type='button'>{title}</button>
);

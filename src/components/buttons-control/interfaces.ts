import React from 'react';
import { Store } from '../../store';

type TButton = {
  title: string,
  callback: React.MouseEventHandler<HTMLButtonElement>,
};

export type TProps = {
  store: Store,
  leftButtons?: TButton[],
  rightButtons?: TButton[],
};

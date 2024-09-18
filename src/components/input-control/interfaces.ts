import React from 'react';
import { InputViewModel } from '../../stores';

type TButton = {
  title: string,
  callback: React.MouseEventHandler<HTMLButtonElement>,
};

export type TProps = {
  viewModel: InputViewModel,
  leftButtons?: TButton[],
  rightButtons?: TButton[],
};

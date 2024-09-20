import React from 'react';
import { InputViewModel } from '../../view-models';

type TButton = {
  title: string,
  callback: React.MouseEventHandler<HTMLButtonElement>,
};

export type TProps = {
  viewModel: InputViewModel,
  leftButtons?: TButton[],
  rightButtons?: TButton[],
};

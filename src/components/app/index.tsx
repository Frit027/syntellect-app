import React from 'react';
import { InputControl } from '../input-control';
import {AutocompleteInputViewModel, InputViewModel} from '../../view-models';
import { AutocompleteInputControl } from '../autocomplete-input-control';
import { classes, texts } from './constants';
import '../../common/index.css';
import './index.css';

/**
 * Главный компонент приложения
 *
 * @component
 */
export const App = () => {
  const inputViewModel1 = new InputViewModel();
  const inputViewModel2 = new InputViewModel();

  const autocompleteInputViewModel1 = new AutocompleteInputViewModel();
  const autocompleteInputViewModel2 = new AutocompleteInputViewModel();

  return <div className={classes.component}>
    <h3>{texts.controlWithButtonsRight}</h3>
    <InputControl
      viewModel={inputViewModel1}
      rightButtons={[
        { title: 'Очистить', callback: inputViewModel1.clear },
        { title: 'Установить "Hello world!"', callback: () => inputViewModel1.setValue('Hello world!') },
      ]}
    />
    <h3>{texts.controlWithButtonsBothSides}</h3>
    <InputControl
      viewModel={inputViewModel2}
      leftButtons={[{ title: 'alert, если число', callback: inputViewModel2.alertIfNumber }]}
      rightButtons={[{ title: 'alert', callback: inputViewModel2.alertValue }]}
    />
    <h3>{texts.autocompleteControl3Tips}</h3>
    <AutocompleteInputControl viewModel={autocompleteInputViewModel1} maxTips={3} />
    <h3>{texts.autocompleteControl10Tips}</h3>
    <AutocompleteInputControl viewModel={autocompleteInputViewModel2} maxTips={10} />
  </div>;
};

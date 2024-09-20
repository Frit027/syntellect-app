import React from 'react';
import { InputControl } from './components/input-control';
import {AutocompleteInputViewModel, InputViewModel} from './view-models';
import { AutocompleteInputControl } from './components/autocomplete-input-control';
import './common/index.css';

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

  return <div>
    <h3>Контрол с 2 кнопками справа</h3>
    <InputControl
      viewModel={inputViewModel1}
      rightButtons={[
        { title: 'Очистить', callback: inputViewModel1.clear },
        { title: 'Установить Hello world!', callback: () => inputViewModel1.setValue('Hello world!') },
      ]}
    />
    <h3>Контрол с 1 кнопкой справа и 1 кнопкой слева</h3>
    <InputControl
      viewModel={inputViewModel2}
      leftButtons={[{ title: 'alert, если число', callback: inputViewModel2.alertIfNumber }]}
      rightButtons={[{ title: 'alert', callback: inputViewModel2.alertValue }]}
    />
    <h3>Контрол-автокомплит (макс. кол-во подсказок - 3)</h3>
    <AutocompleteInputControl viewModel={autocompleteInputViewModel1} maxTips={3} />
    <h3>Контрол-автокомплит (макс. кол-во подсказок - 10)</h3>
    <AutocompleteInputControl viewModel={autocompleteInputViewModel2} maxTips={10} />
  </div>;
};

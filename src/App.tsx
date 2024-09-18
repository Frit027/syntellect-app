import React from 'react';
import { ButtonsControl } from './components/buttons-control';
import { InputViewModel } from './stores';

const App = () => {
  const inputViewModel1 = new InputViewModel();
  const inputViewModel2 = new InputViewModel();

  return <div>
    <ButtonsControl
      viewModel={inputViewModel1}
      rightButtons={[
        { title: 'Очистить', callback: inputViewModel1.clear },
        { title: 'Установить Hello world!', callback: () => inputViewModel1.setValue('Hello world!') },
      ]} />
    <ButtonsControl
      viewModel={inputViewModel2}
      leftButtons={[{ title: 'alert, если число', callback: inputViewModel2.alertIfNumber }]}
      rightButtons={[{ title: 'alert', callback: inputViewModel2.alertValue }]} />
  </div>;
};

export default App;

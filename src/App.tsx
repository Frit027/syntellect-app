import React from 'react';
import { InputControl } from './components/input-control';
import { InputViewModel } from './stores';

const App = () => {
  const inputViewModel1 = new InputViewModel();
  const inputViewModel2 = new InputViewModel();

  return <div>
    <InputControl
      viewModel={inputViewModel1}
      rightButtons={[
        { title: 'Очистить', callback: inputViewModel1.clear },
        { title: 'Установить Hello world!', callback: () => inputViewModel1.setValue('Hello world!') },
      ]} />
    <InputControl
      viewModel={inputViewModel2}
      leftButtons={[{ title: 'alert, если число', callback: inputViewModel2.alertIfNumber }]}
      rightButtons={[{ title: 'alert', callback: inputViewModel2.alertValue }]} />
  </div>;
};

export default App;

import React from 'react';
import { ButtonsControl } from './components/buttons-control';
import { observer } from 'mobx-react-lite';
import { Store } from './store';

const App = observer(({ store1, store2 }: { store1: Store, store2: Store }) => {
  return <div>
    <ButtonsControl
      store={store1}
      rightButtons={[
        { title: 'Очистить', callback: store1.clear },
        { title: 'Установить Hello world!', callback: () => store1.setValue('Hello world!') },
      ]} />
    <ButtonsControl
      store={store2}
      leftButtons={[{ title: 'alert, если число', callback: store2.alertIfNumber }]}
      rightButtons={[{ title: 'alert', callback: store2.alertValue }]} />
  </div>;
});

export default App;

import React from 'react';
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import store from "@Store/store";
import Navigation from '@Navigation/index';

let persistor = persistStore(store);

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;

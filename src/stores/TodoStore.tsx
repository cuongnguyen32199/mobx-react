import React, { createContext, useContext } from 'react';
import { useLocalObservable } from 'mobx-react-lite';
import { store, createStore, TodoStore } from './todo';

const StoreContext = createContext<TodoStore>(store);

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const store = useLocalObservable(createStore);

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export const useStore = () => useContext(StoreContext);

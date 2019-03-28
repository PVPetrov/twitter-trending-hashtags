import React, { createContext } from 'react';
import useWindowSize from '../utils/useWindowSize';

const WindowSize = createContext();

export const WindowSizeConsumer = WindowSize.Consumer;

const WindowSizeProvider = ({ children }) => {
  
  const windowSize = useWindowSize();
  
    return (
       <WindowSize.Provider value={{windowSize}}>
        {children}
      </WindowSize.Provider>
    )
}
export default WindowSizeProvider;


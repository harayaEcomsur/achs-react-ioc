import React, { createContext } from 'react';
import IoCContainer from '../modules/IoCContainer';

export const IoCContext = createContext(new IoCContainer());

const IoCProvider = ({ children, container }) => {
  return (
    <IoCContext.Provider value={container}>
      {children}
    </IoCContext.Provider>
  );
};

export default IoCProvider;

import React from 'react';
import IoCProvider from './providers/IoCProvider';
import IoCContainer from './modules/IoCContainer';
import useDependency from './hooks/useDependency';
import './App.css';

const TOKEN = 'ExampleService';

const ExampleService = () => {
  return {
    getMessage: () => 'Hola mundo!',
  };
};

const container = new IoCContainer();
container.register(TOKEN, ExampleService());

const ExampleComponent = () => {
  const exampleService = useDependency(TOKEN);
  return (
    <div className='service'>
      {exampleService ? exampleService.getMessage() : 'Service not available'}
    </div>
  );
};

const App = () => {
  return (
    <IoCProvider container={container}>
      <ExampleComponent />
    </IoCProvider>
  );
};

export default App;

import React from 'react';
import IoCProvider from './providers/IoCProvider';
import IoCContainer from './modules/IoCContainer';
import useDependency from './hooks/useDependency';

const TOKEN = 'Hola mundo!';

const ExampleService = () => {
  return {
    getMessage: () => 'Hello from ExampleService!',
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

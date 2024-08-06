import { useContext } from 'react';
import { IoCContext } from '../providers/IoCProvider';

const useDependency = (token) => {
  const container = useContext(IoCContext);
  return container.resolve(token);
};

export default useDependency;

import { renderHook, act } from '@testing-library/react-hooks';
import IoCContainer from '../modules/IoCContainer';
import IoCProvider from '../providers/IoCProvider';
import useDependency from '../hooks/useDependency';

// Definir un mock de dependencia para los tests
const mockDependency = { foo: 'bar' };
const mockToken = 'MockDependency';

describe('IoCContainer', () => {
  it('should register and resolve dependencies correctly', () => {
    const container = new IoCContainer();
    act(() => {
      container.register(mockToken, mockDependency);
    });
    expect(container.resolve(mockToken)).toBe(mockDependency);
  });

  it('should return null for undefined dependencies', () => {
    const container = new IoCContainer();
    expect(container.resolve('UndefinedDependency')).toBe(null);
  });
});

describe('useDependency', () => {
  it('should resolve dependency using the hook', () => {
    const container = new IoCContainer();
    act(() => {
      container.register(mockToken, mockDependency);
    });

    const wrapper = ({ children }) => (
      <IoCProvider container={container}>{children}</IoCProvider>
    );

    const { result } = renderHook(() => useDependency(mockToken), { wrapper });
    expect(result.current).toBe(mockDependency);
  });

  it('should return null for undefined dependency using the hook', () => {
    const container = new IoCContainer();

    const wrapper = ({ children }) => (
      <IoCProvider container={container}>{children}</IoCProvider>
    );

    const { result } = renderHook(() => useDependency('UndefinedDependency'), { wrapper });
    expect(result.current).toBe(null);
  });
});

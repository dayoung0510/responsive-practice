import React, { createContext, useContext, useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

type DeviceType = 'mobile' | 'tab' | 'labtop' | 'desktop';

type ContextProps = {
  device: DeviceType;
  setDevice: React.Dispatch<React.SetStateAction<DeviceType>>;
};

const Context = createContext<ContextProps>({
  device: 'desktop',
  setDevice: () => {},
});

export const useAppContext = () => useContext(Context);

const AppContext: React.FC = ({ children }) => {
  const [device, setDevice] = useState<DeviceType>('desktop');

  const isMobile = useMediaQuery({ query: '(max-width:450px' });
  const isTab = useMediaQuery({ query: '(max-width:767px)' });
  const isLabtop = useMediaQuery({ query: '(max-width:1023px)' });

  useEffect(() => {
    if (isMobile) {
      setDevice('mobile');
    } else if (isTab) {
      setDevice('tab');
    } else if (isLabtop) {
      setDevice('labtop');
    } else {
      setDevice('desktop');
    }
  }, [isMobile, isTab, isLabtop]);

  return (
    <Context.Provider value={{ device, setDevice }}>
      {children}
    </Context.Provider>
  );
};

export default AppContext;

import React from 'react';
import { useAppContext } from './context';

const App: React.FC = () => {
  const { device } = useAppContext();
  console.log(device);
  return <div className="App">안녕하세요</div>;
};

export default App;

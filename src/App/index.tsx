import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAppContext } from './context';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Nav = styled.div`
  width: 100%;
  height: 5rem;
`;
const Content = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: calc(100% - 5rem);
  overflow: auto;
  background: pink;
`;
const Content2 = styled.div`
  width: 100%;
  overflow: auto;
  background: ivory;
`;

const App: React.FC = () => {
  const { device } = useAppContext();

  const [ScrollY, setScrollY] = useState(0); // 스크롤값을 저장하기 위한 상태
  const handleFollow = () => {
    setScrollY(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장
  };

  useEffect(() => {
    console.log('ScrollY is ', ScrollY); // ScrollY가 변화할때마다 값을 콘솔에 출력
  }, [ScrollY]);

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow);
    };
    watch(); // addEventListener 함수를 실행
    return () => {
      window.removeEventListener('scroll', handleFollow); // addEventListener 함수를 삭제
    };
  });

  return (
    <div className="App">
      <Nav />
      <div>
        안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요 <br />
        안녕하세요
        <br />
        <br />
        <br />
        <br /> <br />
        <br />
        <br />
        <br /> <br />
        <br />
        <br />
        <br /> <br />
        <br />
        <br />
        <br /> <br />
        <br />
        <br />
        <br />
        안녕하세요 <br />
        안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요 안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요 안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요 안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요 안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요 안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요 안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요 안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요 안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요 안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요 안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요 안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요
        <br />
        안녕하세요
      </div>
    </div>
  );
};

export default App;

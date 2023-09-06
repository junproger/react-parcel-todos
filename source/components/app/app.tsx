import { FC } from 'react';

import hello from '../../assets/hello.png';

export const App: FC = () => {
  return (
    <>
      <h1>The Project Started!</h1>
      <div className="title">
        <img src={hello} className="hello" alt="hello" />
        Welcome to awesome project! 🚀
      </div>
    </>
  );
};

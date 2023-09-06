import { FC } from 'react';

import { Header } from '../view/Header';
import { Main } from '../view/Main';
import { Footer } from '../view/Footer';

export const App: FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

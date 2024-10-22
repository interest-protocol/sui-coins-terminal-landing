import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

import { GlobalStyles } from '@/styles';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Global styles={GlobalStyles} />
    <Toaster
      position="bottom-right"
      reverseOrder={false}
      toastOptions={{
        style: {
          color: '#fff',
          border: '1px solid',
          borderRadius: '2rem',
          background: '#000',
          borderColor: '#fff',
        },
        duration: 1000,
      }}
    />
    <Component {...pageProps} />
  </>
);

export default App;

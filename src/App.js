import React from 'react';
import { ThemeProvider } from '@arcblock/ux/lib/Theme';
import { LocaleProvider } from '@arcblock/ux/lib/Locale/context';

import { SessionProvider } from './libs/session';
import { translations } from './locales';
import Main from './page/main';

let apiPrefix = '/';
if (window.blocklet && window.blocklet.prefix) {
  apiPrefix = window.blocklet.prefix;
}

function App() {
  return (
    <ThemeProvider>
      <LocaleProvider translations={translations}>
        <SessionProvider
          serviceHost={apiPrefix}
        >
          <Main />
        </SessionProvider>
      </LocaleProvider>
    </ThemeProvider>
  );
}

export default App;

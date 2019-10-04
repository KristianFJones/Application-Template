// Web/UI/App.tsx
import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import { theme } from 'UI/Components/Styles/Theme';
import AppRouter from './Components/Router';
import { CssBaseline } from '@material-ui/core';
import { NavProvider } from 'UI/Components/Providers/NavProvider';
import { useImport } from 'UI/Components/Providers/ImportProvider';
import { SessionProvider, useSession } from 'UI/Components/Providers/Session/SessionProvider';
import { useRoute } from 'UI/Components/Router/useRoute';
import { Redirect } from 'react-router';

export function AppBody(): React.ReactElement {
  const route = useRoute();
  const { roles } = useSession()

  const isAuthorized = route?.roles ? route?.roles?.every((role) => roles.includes(role)) : true

  return (
    <>
      {isAuthorized ? <AppRouter /> : <Redirect to='/' />}
    </>
  );
}

export function App(): React.ReactElement {
  const AppBar = useImport({
    imported: import('UI/Components/Styles/AppBar/index'),
    path: 'Components/Styles/AppBar/index.tsx',
    Loader: () => <div>Loading</div>,
  });

  const NavDrawer = useImport({
    imported: import('UI/Components/Styles/NavDrawer/index'),
    path: 'Components/Styles/NavDrawer/index.tsx',
    Loader: () => <div>Loading</div>,
  });

  return (
    <SessionProvider>
      <ThemeProvider theme={theme}>
        <NavProvider>
          <AppBar />
          <NavDrawer />
        </NavProvider>

        <AppBody />
        <CssBaseline />
      </ThemeProvider>
    </SessionProvider>
  );
}

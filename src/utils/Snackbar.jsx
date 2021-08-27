import React from 'react';
import { SnackbarProvider } from 'notistack';
import Notistack from '../components/Notistack';

function Snackbar() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Notistack />
    </SnackbarProvider>
  );
}

export default Snackbar;
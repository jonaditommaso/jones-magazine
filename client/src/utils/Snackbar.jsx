import React from 'react';
import { SnackbarProvider } from 'notistack';
import Notistack from '../components/Notistack';

const Snackbar = ({redux, remove}) => {
  return (
    <SnackbarProvider maxSnack={3}>
      <Notistack  
        redux={redux}
        remove={remove}
      />
    </SnackbarProvider>
  );
}

export default Snackbar;
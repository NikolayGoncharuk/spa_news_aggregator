import { createMuiTheme } from '@material-ui/core/styles';

const makeTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },

  props: {
    MuiButton: {
      variant: 'contained',
    },
  },
});

export default makeTheme;
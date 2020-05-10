import { createMuiTheme } from '@material-ui/core/styles';

export const makeTheme = (props) => createMuiTheme({
  palette: {
    type: (props.darkMode ? 'dark' : 'light')
  },
  typography: {
    fontSize: props.typography.fontSize,
    h1: {
      fontWeight: 900,
    },
    h2: {
      fontWeight: 900,
    },
    h3: {
      fontWeight: 900,
    },
    h4: {
      fontWeight: 900,
    },
    h5: {
      fontWeight: 900,
    },
    h6: {
      fontWeight: 900,
    },
  },

  props: {
    MuiButton: {
      variant: 'contained',
    },
    MuiCard: {
      raised: true,
    },
    MuiAppBar: {
      color: 'transparent',
    },
    MuiLink: {
      color: 'textPrimary',
      underline: 'none',
    },
  },
});
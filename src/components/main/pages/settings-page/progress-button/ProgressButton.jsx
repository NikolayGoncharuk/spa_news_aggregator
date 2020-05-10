import React from 'react';
// Styled Components
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
// Icons
import CloseIcon from '@material-ui/icons/Close';

export default function ProgressButton(props) {
  const { saveSettings, localPageSize, pageSize, localFontSize, fontSize, localDarkMode, darkMode, label, labelDisabled } = props;

  const [disabled, setDisabled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleButtonClick = () => {
    setDisabled(true);
    saveSettings();
    setDisabled(false);
    setOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  return (
    <div>
      <Button
        color="primary"
        disabled={disabled || (localPageSize === pageSize && localFontSize === fontSize && localDarkMode === darkMode)}
        onClick={handleButtonClick}>
        {disabled ? labelDisabled : label}
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}
        open={open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="Настройки сохранены!"
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleSnackbarClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
};
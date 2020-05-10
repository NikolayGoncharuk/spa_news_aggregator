import React from 'react';
// Styled Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

export default function FontSize(props) {
  const { className, fontSize, defaultFontSize, handleFontSize, localFontSize } = props;

  return (
    <div className={className}>
      <Typography gutterBottom variant="h5">Размер шрифта: {fontSize}</Typography>
      <Grid container spacing={3}>
        <Grid item  xs={12} md={8}>
          <Typography>Orci sagittis eu volutpat odio facilisis mauris sit. Ac placerat vestibulum lectus mauris ultrices eros in. Vitae tortor condimentum lacinia quis vel eros donec. Pharetra convallis posuere morbi leo urna molestie at elementum eu.</Typography>
        </Grid>
        <Grid item xs>
          <Typography><strong>Выберите размер шрифта</strong></Typography>
          <Typography variant="caption">По умолчанию {defaultFontSize}</Typography>
          <Slider onChange={handleFontSize} value={localFontSize} valueLabelDisplay="auto" marks defaultValue={fontSize} step={1} min={10} max={20} />
        </Grid>
      </Grid>
    </div>
  );
};
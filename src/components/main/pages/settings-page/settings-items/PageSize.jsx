import React from 'react';
// Styled Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

export default function PageSize(props) {
  const { className, pageSize, defaultPageSize, handlePageSize, localPageSize } = props;

  return (
    <div className={className}>
      <Typography gutterBottom variant="h5">Количество выводимых новостей: {pageSize}</Typography>
      <Grid container spacing={3}>
        <Grid item xs>
          <Typography>Orci sagittis eu volutpat odio facilisis mauris sit. Ac placerat vestibulum lectus mauris ultrices eros in. Vitae tortor condimentum lacinia quis vel eros donec. Pharetra convallis posuere morbi leo urna molestie at elementum eu.</Typography>
        </Grid>
        <Grid item xs>
          <Typography><strong>Выберите количество выводимых новостей</strong></Typography>
          <Typography variant="caption">По умолчанию {defaultPageSize}</Typography>
          <Slider onChange={handlePageSize} value={localPageSize} valueLabelDisplay="auto" marks defaultValue={pageSize} step={5} min={10} max={30} />
        </Grid>
      </Grid>
    </div>
  );
};
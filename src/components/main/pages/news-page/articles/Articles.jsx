import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Masonry from 'react-masonry-component';
// Styled Components
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  masonry: {
    margin: '0 -16px',
  },
  card: {
    width: 'calc(50% - 32px)',
    margin: '0 16px 32px',
  },
  cardActions: {
    margin: '8px',
  },
}));

export default function Articles(props) {
  const classes = useStyles();

  if (props.loading) {
    return 'Загружается...';
  };

  const setArticles = () => (
    props.newsResponse.articles.map((item, index) => {
      return (
        <Card className={classes.card} key={index}>
          <CardActionArea>
            <CardMedia component="img" alt={item.title} image={item.urlToImage} />
            <CardContent>
              <Typography gutterBottom>{item.publishedAt}</Typography>
              <Typography gutterBottom variant="h5">{item.title}</Typography>
              <Typography>{item.description}</Typography>
            </CardContent>
          </CardActionArea>
          <Divider />
          <CardActions className={classes.cardActions}>
            <Chip variant="outlined" label={item.source.name} />
          </CardActions>
        </Card>
      );
    })
  );

  return (
    <Masonry className={classes.masonry}>
      {setArticles()}
    </Masonry>
  );
};
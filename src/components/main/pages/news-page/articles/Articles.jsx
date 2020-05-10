import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Masonry from 'react-masonry-component';
// Styled Components
import Skeleton from '@material-ui/lab/Skeleton';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  masonry: {
    margin: '0 -16px',
    [theme.breakpoints.down('md')]: {
      margin: '0 -12px',
    },
    [theme.breakpoints.down('xs')]: {
      margin: 0,
    },
  },
  card: {
    width: 'calc(50% - 32px)',
    margin: '0 16px 32px',
    [theme.breakpoints.down('md')]: {
      width: 'calc(50% - 24px)',
      margin: '0 12px 24px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      margin: '0 0 16px',
    },
  },
  cardActions: {
    margin: '8px',
  },
}));

export default function Articles(props) {
  const { isInitial, articles, newsParams } = props;
  const classes = useStyles();
  const match = useRouteMatch();

  const setSkeleton = () => (
    Array.from(new Array(newsParams.pageSize))
  );

  const setArticles = () => (
    (!isInitial ? setSkeleton() : articles).map((item, index) => (
      <Card className={classes.card} key={index}>
        {item ?
          <React.Fragment>
            <Link component={NavLink} to={`${match.url}/${item.id}`}>
              <CardActionArea>
                <CardMedia component="img" alt={item.title} image={item.urlToImage} />
                <CardContent>
                  <Typography gutterBottom>{item.publishedAt}</Typography>
                  <Typography gutterBottom variant="h5">{item.title}</Typography>
                  <Typography>{item.description}</Typography>
                </CardContent>
              </CardActionArea>
            </Link>
            <Divider />
            <CardActions className={classes.cardActions}>
              <Chip variant="outlined" label={item.source.name} />
            </CardActions>
          </React.Fragment> :

          <React.Fragment>
            <Box>
              <Skeleton height="300px" variant="rect" />
              <CardContent>
                <Skeleton width="30%" />
                <Box pt={1}>
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
                <Box pt={1}>
                  <Skeleton />
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
              </CardContent>
            </Box>
            <Divider />
            <CardActions className={classes.cardActions}>
              <Skeleton width="30%" />
            </CardActions>
          </React.Fragment>
        }
      </Card>
    ))
  );

  return (
    <Masonry className={classes.masonry}>
      {setArticles()}
    </Masonry>
  );
};
import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
// Styled Components
import Skeleton from '@material-ui/lab/Skeleton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

export default function LatestArticles(props) {
  const { latestArticles: { articles, maxArticlesLength }, getLatestArticles, isInitial, newsParams } = props;
  const match = useRouteMatch();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      await getLatestArticles(newsParams);
      setLoading(false);
    };
    fetch();
  }, [maxArticlesLength]);

  const setLatestArticles = ((!isInitial && loading) ? Array.from(new Array(maxArticlesLength)) : articles).map((item, index) => (
    <React.Fragment key={index}>
      {item ?
        <Link component={NavLink} to={`${match.url}/${item.id}`}>
          <ListItem button alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={item.title} src={item.urlToImage} />
            </ListItemAvatar>
            <ListItemText primary={item.title} />
          </ListItem>
        </Link> :

        <Link>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Skeleton variant="circle" width={40} height={40} />
            </ListItemAvatar>
            <Box pt={0.5} width="100%">
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </ListItem>
        </Link>
      }
      {index + 1 !== maxArticlesLength ? <Divider variant="inset" component="li" /> : <React.Fragment />}
    </React.Fragment >
  ));

  return (
    <div>
      <Typography variant="h6">Последние новости</Typography>
      <List>
        {setLatestArticles}
      </List>
    </div>
  );
};
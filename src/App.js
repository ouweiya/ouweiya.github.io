import React, { Fragment as f, createElement as e, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    marginBottom: 8,
    transition: '0.35s'
  },
  link: {
    '&:hover > div': {
      background: '#eee',
      boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)'
    }
  }
}));

export default function PaperSheet() {
  const c = useStyles();
  const [Gtihub, getGithub] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/ouweiya/repos?sort=updated`)
      .then(res => res.json())
      .then(res => getGithub(res));
  }, []);

  return Gtihub.map(git =>
    e(
      Link,
      { key: git.id, href: git.html_url, target: '_blank', className: c.link, underline: 'none' },
      e(
        Paper,
        { className: c.root },
        e(Typography, { variant: 'h5', component: 'h3', gutterBottom: true }, git.name),
        e(Typography, { variant: 'subtitle1', component: 'p', className: c.p }, git.description)
      )
    )
  );
}

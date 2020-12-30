import Link from 'next/link';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from './Drawer';

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Drawer />
        <Typography variant="h6" className={classes.title}>
          University Dictionary
        </Typography>
        <Link href="/">
          <Typography>Home</Typography>
        </Link>
        <Link href="/">
          <Typography>Newsletter</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      flexGrow: 1,
    },
  })
);

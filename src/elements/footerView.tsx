import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram'
import { Button } from '@mui/material';

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary">
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/exceptionpilot">
          Sebastian Zängler
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default function FooterView() {
    return (
    <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          textAlign: 'center',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
        >
        <Container maxWidth="sm">
          <Typography variant="body1">
            Made with 🥦 in Cologne
          </Typography>
          <Copyright/>
              <Button href='https://github.com/exceptionpilot'>
          <GitHubIcon/>
          </Button>
          <Button href='https://instagram.com/basti.ehz'>
          <InstagramIcon></InstagramIcon>
          </Button>
        </Container>
        </Box>);
}
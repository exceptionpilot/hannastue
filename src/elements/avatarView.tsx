import Typography from '@mui/material/Typography';
import { Avatar, Box, Grid } from '@mui/material';

export default function AvatarView() {
    return (
   
        <Box display="flex" justifyContent="center" alignItems="center" sx={{
            flexDirection: 'column',
            direction: 'row',
          }}>
        <Avatar src="https://images-ext-1.discordapp.net/external/y4OxwDMZZLJgQhQNgmgpvDcn1TRFYpMSZvx_sPWvs2o/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/1083124530656067694/f21d999e8236afe7218d7fc104a4b0fd.png?format=webp&quality=lossless" alt="hanna uwu" sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: "center",
          width: '10rem',
          height: '10rem',
        }}/>
      <Typography variant="h4" component="h1" gutterBottom sx={{
        color: "whitesmoke",
        textAlign: "center",
        fontStyle: "italic"
        }}>hannastue</Typography>
        
        <Typography variant="h6" component="h1" gutterBottom sx={{
        color: "whitesmoke",
        textAlign: "center",
        fontStyle: "italic"
        }}>
          checkout all my socials.
        </Typography>
        </Box>);
}
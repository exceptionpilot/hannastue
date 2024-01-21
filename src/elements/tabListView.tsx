import * as React from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Box, Button,  Tab, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import TikTokIcon from "../icons/discord.ts/tiktokIcon";
import TwitchIcon from "../icons/discord.ts/twitchIcon";
import DiscordIcon from "../icons/discord.ts/discordIcon";

export default function TabListView() {
    const [value, setValue] = React.useState('socials');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
    return (
        <TabContext value={value}>
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} textColor="secondary" indicatorColor="secondary" aria-label="hello world" sx={{color: "whitesmoke"}}>
            <Tab label="Socials" value="socials" sx={{color: "whitesmoke"}}/>
            <Tab label="Imprint" value="imprint" sx={{color: "whitesmoke"}}/>
          </TabList>
        </Box>
        <TabPanel value="socials">
          <Box display="flex" justifyContent="center" alignItems="center" sx={{
            flexDirection: 'column',
            direction: 'row',
          }}>
              <Button variant="outlined" color="secondary" href='https://instagram.com/hannastue' startIcon={<InstagramIcon/>} sx={{
                width: '70%',
                margin: 1,
                borderRadius: 10,
              }}>
  Instagram
</Button>

<Button variant="outlined" color="secondary" href='https://www.tiktok.com/@hanastue' startIcon={<TikTokIcon/>} sx={{
  width: '70%',
  margin: 1,
  borderRadius: 10
              }}>
  TikTok
</Button>

<Button variant="outlined" color="secondary" href='https://www.twitch.tv/hannastue' startIcon={<TwitchIcon/>} sx={{
  width: '70%',
  margin: 1,
  borderRadius: 10
              }}>
  Twitch
</Button>

<Button variant="outlined" color="secondary" href='https://discord.gg/YRTJU4TuQV' startIcon={<DiscordIcon/>} sx={{
  width: '70%',
  margin: 1,
  borderRadius: 10
              }}>
  Discord
</Button>

<Button variant="outlined" color="secondary" href='https://twitter.com/hannastue' startIcon={<XIcon/>} sx={{
  width: '70%',
  margin: 1,
  borderRadius: 10
              }}>
  Twitter
</Button>


<Button variant="outlined" color="secondary" href='https://www.amazon.de/hz/wishlist/ls/1FYYJWTU86DGA?ref_=wl_share' startIcon={<ShoppingBagIcon/>} sx={{
  width: '70%',
  margin: 1,
  borderRadius: 10

              }}>
  Amazon Wishlist
</Button>

</Box>
        </TabPanel>
        <TabPanel value="imprint">
          <Typography variant='h4' sx={{color: "whitesmoke"}}>
          Hanna-Sophie Stützer
          </Typography>
          <Typography variant='h6' fontStyle={'italic'} sx={{color: "whitesmoke"}}>
          (gleichzeitig verantwortlich für den Inhalt auf:
https://twitter.com/hannastue
https://instagram.com/hannastue
https://www.twitch.tv/hannastue
https://www.tiktok.com/@hanastue
https://hannastue.com/)
          </Typography>
          <Typography variant='h6' fontStyle={'italic'} sx={{color: "whitesmoke"}}>
(gem. § 55 Abs. 2 RStV)
<br />
<br />
Adresse:
<br />
wird nachgereicht (auf anfrage per mail)
<br />
<br />
Steuer-ID:
wird nachgereicht
<br />
<br />
Kontaktmöglichkeiten:
<br />
hanna.stue@gmail.com
</Typography>
        </TabPanel>
      </TabContext>
    );
}
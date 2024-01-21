import FooterView from './elements/footerView';
import { Container, Divider, Grid, LinearProgress } from '@mui/material';

import background from './images/background.png';
import AvatarView from './elements/avatarView';
import TabListView from './elements/tabListView';

function App() {

  return (
    <div style={{  }}>
        
      
      <header>
      <Grid sx={{
        backgroundImage: `url("${background}")`, 
        height: "100%", 
        backgroundSize: "cover", opacity: "100%",
        backgroundBlendMode: "darken, luminosity;",
        }}>
        <Container sx={{ width: "100vw", height: '100vh'}}>
          <Grid xs display="flex" justifyContent="center" alignItems="center" spacing={3} >
          <AvatarView/>
          </Grid>
              <TabListView/>
        </Container>
        <Divider variant="middle" sx={{
                py: 1,
              }}/> 
              </Grid>

      </header>
      <body>
      </body>
    <footer>
    <LinearProgress color="secondary" />
      <FooterView/>
    </footer>
    </div>
  );
}
export default App;
import { Box } from '@mui/material';
import Sidebar from './component/Sidebar';
import Main from './component/Main';

function App() {
  return (
    <>
      <Box 
        
      >
        <Sidebar sx={{ flex: { xs: '1 1 100%', sm: '1 1 30%' } }} />  {/* Sidebar takes full width on small screens, 30% on tablets and desktops */}
        <Main sx={{ flex: { xs: '1 1 100%', sm: '1 1 70%' } }} />  {/* Main takes full width on small screens, 70% on tablets and desktops */}
      </Box>
    </>
  )
}

export default App;

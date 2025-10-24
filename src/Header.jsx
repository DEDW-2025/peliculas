import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import { NavLink } from 'react-router';

export default function SearchAppBar({ value, onChange, language, onLanguageChange }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Cartelera Comunidad Castillo
          </Typography>
           <Box sx={{ flexGrow: 1, display: 'flex', ml: 3 }}>
            <Button
              component={NavLink}
              to="/upcoming"
              sx={{
                color: 'white',
                '&.active': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                }
              }}
            >
              Próximas películas
            </Button>
            <Button
              component={NavLink}
              to="/now_playing"
              sx={{
                color: 'white',
                '&.active': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                }
              }}
            >
              En cartelera
            </Button>
          </Box>
          <Box
            sx={{
              position: 'relative',
              borderRadius: 1,
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.25)',
              },
              marginLeft: { xs: 0, sm: 1 },
              width: { xs: '100%', sm: 'auto' },
            }}
          >
            <Box
              sx={{
                padding: '0 16px',
                height: '100%',
                position: 'absolute',
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <SearchIcon />
            </Box>
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={value}
              onChange={onChange}
              sx={{
                color: 'inherit',
                width: '100%',
                '& .MuiInputBase-input': {
                  padding: '8px 8px 8px 0',
                  paddingLeft: 'calc(1em + 32px)',
                  transition: 'width 0.3s',
                  width: { xs: '100%', sm: '12ch' },
                  '&:focus': {
                    width: { sm: '20ch' },
                  },
                },
              }}
            />
          </Box>
          <Select
            value={language}
            onChange={onLanguageChange}
            sx={{
              color: 'white',
              marginLeft: 2,
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(255, 255, 255, 0.3)',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(255, 255, 255, 0.5)',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '& .MuiSvgIcon-root': {
                color: 'white',
              },
            }}
            size="small"
          >
            <MenuItem value="es-CL">
              {language === "es-CL" ? 'Español' : 'Spanish'}
            </MenuItem>
            <MenuItem value="en">
              {language === "es-CL" ? 'Inglés' : 'English'}
            </MenuItem>
          </Select>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

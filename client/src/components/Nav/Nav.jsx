import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { CardMedia } from '@mui/material';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import { fetchLogout } from '../../redux/thunk/userAsyncAction';

function Nav() {
  const { user } = useSelector((state) => state.userReducer);
  // console.log(user.image);
  const navigate = useNavigate();

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const dispatch = useDispatch();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const functionLogout = () => {
    dispatch(fetchLogout());
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box
            sx={{ display: 'flex', ml: 5, cursor: 'pointer' }}
            onClick={() => navigate('/modules')}
          >
            <Typography>Pern Stacker</Typography>
            <DeveloperModeIcon />
          </Box>

          <Box sx={{ flexGrow: 0, mr: 5 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={user.image} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
                <Typography textAlign="center">
                  <Link to="/modules">На главную</Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center">
                  <Link to="/profile">Профиль</Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center" onClick={functionLogout}>
                  Выйти
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Nav;

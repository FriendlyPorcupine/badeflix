'use client';

<<<<<<< HEAD
=======
// uses style from layout.css
>>>>>>> 4e1922e47a5bf0e7a7483f4243d9d7df1759a66d
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect } from 'react';
<<<<<<< HEAD
=======
import { getCookie } from '../../utils/getCookie';
>>>>>>> 4e1922e47a5bf0e7a7483f4243d9d7df1759a66d

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
<<<<<<< HEAD
    const id = localStorage.getItem('authenticated');
    setIsAuthenticated(id === '1');
  }, [localStorage.getItem('authenticated')]);
=======
    const id = getCookie('session.id');
    if (id === '' && isAuthenticated) {
      setIsAuthenticated(false);
    }
    if (id !== '' && !isAuthenticated) {
      setIsAuthenticated(true);
    }
  }, []);
>>>>>>> 4e1922e47a5bf0e7a7483f4243d9d7df1759a66d

  return (
    <nav>
      <Button
        style={{ color: '#D74967' }}
        size="large"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseEnter={handleClick}
        onMouseLeave={handleClick}
        onClick={handleClick}
      >
        <b>Menu</b>
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose}>
          <Button>
            <a href="/">Home</a>
          </Button>
        </MenuItem>

        {!isAuthenticated && (
<<<<<<< HEAD
          <MenuItem onClick={handleClose}>
            <Button>
              <a href="/signup">Register</a>
            </Button>
          </MenuItem>
        )}
        {!isAuthenticated && (
          <MenuItem onClick={handleClose}>
            <Button>
              <a href="/signin">Sign in</a>
            </Button>
          </MenuItem>
=======
          <>
            <MenuItem onClick={handleClose}>
              <Button>
                <a href="/signup">Register</a>
              </Button>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Button>
                <a href="/signin">Sign in</a>
              </Button>
            </MenuItem>
          </>
>>>>>>> 4e1922e47a5bf0e7a7483f4243d9d7df1759a66d
        )}
        {isAuthenticated && (
          <MenuItem onClick={handleClose}>
            <Button>
              <a href="/signout">Sign out</a>
            </Button>
          </MenuItem>
        )}
        <MenuItem onClick={handleClose}>
          <Button>
            <a href="/profile">Profile</a>
          </Button>
        </MenuItem>
      </Menu>
    </nav>
  );
};
export default Navbar;

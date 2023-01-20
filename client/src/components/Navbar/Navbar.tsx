// uses style from layout.css
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
      <nav>
        <Button
          style={{color: "#D74967"}}
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
          <MenuItem onClick={handleClose}><Button><a href="/">Home</a></Button></MenuItem>
          <MenuItem onClick={handleClose}><Button><a href="/signup">Register</a></Button></MenuItem>
          <MenuItem onClick={handleClose}><Button><a href="/signin">Sign in</a></Button></MenuItem>
          <MenuItem onClick={handleClose}><Button><a href="/signout">Sign out</a></Button></MenuItem>
          <MenuItem onClick={handleClose}><Button><a href="/profile">Profile</a></Button></MenuItem>

        </Menu>
      </nav>
  );
};
export default Navbar;



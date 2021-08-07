import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';

import MenuButton from '@material-ui/icons/Menu';
import Welcome from './welcome';
import BasicForm from './basic-form';
import Command from './command';
import AppAbout from './app-about';
import Rest from './rest'
import FS_Inifile from './fs_inifile'

export default function AppMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleClickOpt(page) {
    props.mainApp.routePage(page)
    handleClose()
  }

  const appButton = {
    WebkitAppRegion: "no-drag"
  }

  return (
    <div>
      <Tooltip title="Main menu">
        <IconButton color="inherit" size="small" style={appButton}
          onClick={handleClick}
        >
          <MenuButton width="28" />
        </IconButton>
      </Tooltip>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => { handleClickOpt(Welcome) }}>Welcome</MenuItem>
        <MenuItem onClick={() => { handleClickOpt(BasicForm) }}>Form</MenuItem>
        <MenuItem onClick={() => { handleClickOpt(Command) }}>Execute Command</MenuItem>
        <MenuItem onClick={() => { handleClickOpt(Rest) }}>Consume Rest </MenuItem>
        <MenuItem onClick={() => { handleClickOpt(FS_Inifile) }}>File System / Ini File </MenuItem>
        <Divider />
        <MenuItem onClick={() => { handleClickOpt(AppAbout) }}>About...</MenuItem>
      </Menu>
    </div>
  );
}
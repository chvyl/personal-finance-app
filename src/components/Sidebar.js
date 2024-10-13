import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => {
  return (
    <div>
      <List>
        <ListItem button>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Reports" />
        </ListItem>
        {/* Thêm các mục khác nếu cần */}
      </List>
    </div>
  );
};

export default Sidebar;

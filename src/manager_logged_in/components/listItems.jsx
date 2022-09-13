import * as React from 'react';
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader } from '@mui/material'; import { Link } from "react-router-dom";
export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemText primary="Orders" />
    </ListItemButton>
    <ListItemButton>
      <ListItemText primary="Customers" />
    </ListItemButton>
    <ListItemButton>
      <ListItemText primary="Reports" />
    </ListItemButton>
    <ListItemButton>
      <ListItemText primary="Integrations" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import TuneIcon from "@mui/icons-material/Tune";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import RadioIcon from "@mui/icons-material/Radio";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import GroupIcon from "@mui/icons-material/Group";
import ErrorIcon from "@mui/icons-material/Error";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useState } from "react";

function Sidebar() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: "257px",
        flexShrink: 0,
        ["& .MuiDrawer-Paper"]: {
          width: "257px",
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ px: "10px" }}>
        <List sx={{ mt: "38px" }} subheader="Home">
          <ListItemButton
            onClick={() => {
              setSelectedItem(0);
            }}
            selected={selectedItem === 0}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>

            <ListItemText primary="Dashboard" />
          </ListItemButton>

          <ListItemButton
            onClick={() => {
              setSelectedItem(1);
            }}
            selected={selectedItem === 1}
          >
            <ListItemIcon>
              <TuneIcon />
            </ListItemIcon>

            <ListItemText primary="Menu Styles" />
            {selectedItem === 1 ? (
              <KeyboardArrowRightIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </ListItemButton>
        </List>

        <Box sx={{ px: "10px" }}>
          <List sx={{ mt: "38px" }} subheader="Pages">
            <ListItemButton
              onClick={() => {
                setSelectedItem(6);
              }}
              selected={selectedItem === 6}
            >
              <ListItemIcon>
                <RadioIcon />
              </ListItemIcon>

              <ListItemText primary="Example" />
              {selectedItem === 6 ? (
                <KeyboardArrowRightIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </ListItemButton>

            <ListItemButton
              onClick={() => {
                setSelectedItem(7);
              }}
              selected={selectedItem === 7}
            >
              <ListItemIcon>
                <LocalActivityIcon />
              </ListItemIcon>

              <ListItemText primary="Widgets" />
              {selectedItem === 3 ? (
                <KeyboardArrowRightIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </ListItemButton>

            <ListItemButton
              onClick={() => {
                setSelectedItem(8);
              }}
              selected={selectedItem === 8}
            >
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>

              <ListItemText primary="Maps" />
              {selectedItem === 8 ? (
                <KeyboardArrowRightIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </ListItemButton>

            <ListItemButton
              onClick={() => {
                setSelectedItem(9);
              }}
              selected={selectedItem === 9}
            >
              <ListItemIcon>
                <VerifiedUserIcon />
              </ListItemIcon>

              <ListItemText primary="Authenticati" />
              {selectedItem === 9 ? (
                <KeyboardArrowRightIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </ListItemButton>

            <ListItemButton
              onClick={() => {
                setSelectedItem(10);
              }}
              selected={selectedItem === 10}
            >
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>

              <ListItemText primary="Users" />
              {selectedItem === 10 ? (
                <KeyboardArrowRightIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </ListItemButton>

            <ListItemButton
              onClick={() => {
                setSelectedItem(11);
              }}
              selected={selectedItem === 11}
            >
              <ListItemIcon>
                <ErrorIcon />
              </ListItemIcon>

              <ListItemText primary="Error 404" />
              {selectedItem === 11 ? (
                <KeyboardArrowRightIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </ListItemButton>

            <ListItemButton
              onClick={() => {
                setSelectedItem(12);
              }}
              selected={selectedItem === 12}
            >
              <ListItemIcon>
                <ReportProblemIcon />
              </ListItemIcon>

              <ListItemText primary="Error 505" />
              {selectedItem === 12 ? (
                <KeyboardArrowRightIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </ListItemButton>

            <ListItemButton
              onClick={() => {
                setSelectedItem(13);
              }}
              selected={selectedItem === 13}
            >
              <ListItemIcon>
                <BookmarkIcon />
              </ListItemIcon>

              <ListItemText primary="Maintence" />
              {selectedItem === 13 ? (
                <KeyboardArrowRightIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </ListItemButton>
          </List>
        </Box>

        <Box sx={{ px: "10px" }}>
          <List sx={{ mt: "38px" }} subheader="Element">
            <ListItemButton
              onClick={() => {
                setSelectedItem(2);
              }}
              selected={selectedItem === 2}
            >
              <ListItemIcon>
                <AccountBalanceWalletIcon />
              </ListItemIcon>

              <ListItemText primary="Components" />
              {selectedItem === 2 ? (
                <KeyboardArrowRightIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </ListItemButton>

            <ListItemButton
              onClick={() => {
                setSelectedItem(3);
              }}
              selected={selectedItem === 3}
            >
              <ListItemIcon>
                <FormatAlignLeftIcon />
              </ListItemIcon>

              <ListItemText primary="Form" />
              {selectedItem === 3 ? (
                <KeyboardArrowRightIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </ListItemButton>

            <ListItemButton
              onClick={() => {
                setSelectedItem(4);
              }}
              selected={selectedItem === 4}
            >
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>

              <ListItemText primary="Table" />
              {selectedItem === 4 ? (
                <KeyboardArrowRightIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </ListItemButton>

            <ListItemButton
              onClick={() => {
                setSelectedItem(5);
              }}
              selected={selectedItem === 5}
            >
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>

              <ListItemText primary="Icons" />
              {selectedItem === 5 ? (
                <KeyboardArrowRightIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </ListItemButton>
          </List>
        </Box>
      </Box>
    </Drawer>
  );
}

export default Sidebar;

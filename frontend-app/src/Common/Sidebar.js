import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { IconButton } from '@mui/material';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import HomeIcon from '@mui/icons-material/Home';
import AlbumIcon from '@mui/icons-material/Album';
import PersonIcon from '@mui/icons-material/Person';
import PublicIcon from '@mui/icons-material/Public';
import BarChartIcon from '@mui/icons-material/BarChart';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import InfoIcon from '@mui/icons-material/Info';

export default function Sidebar({ open, setOpen }) {

    const toggleDrawer = () => (event) => {
        setOpen(false)

    };

    const links = {
        "link1": { "name": "Home", "icon": <HomeIcon /> },
        "link2": { "name": "Albums", "icon": <AlbumIcon /> },
        "link3": { "name": "Artists", "icon": <PersonIcon /> },
        "link4": { "name": "Publishers", "icon": <PublicIcon /> },
        "link5": { "name": "Statistics", "icon": <BarChartIcon /> },
        "link6": { "name": "Random Album", "icon": <QuestionMarkIcon /> },
        "link7": { "name": "About", "icon": <InfoIcon /> }
    };


    //change this later
    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer()}
            onKeyDown={toggleDrawer()}
        >
            <Box sx={{ display: 'flex', justifyContent: 'end', }}>
                <IconButton>
                    <ArrowBackIosRoundedIcon
                        onClick={toggleDrawer()}
                    />
                </IconButton>
            </Box>
            <List>
                {Object.entries(links).map(([key, link]) => (
                    <ListItem key={key} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {link.icon}
                            </ListItemIcon>
                            <ListItemText primary={link.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment>
                <Drawer
                    anchor={'left'}
                    open={open}
                    onClose={toggleDrawer()}
                >
                    {list('left')}
                </Drawer>
            </React.Fragment>
        </div>
    );
}

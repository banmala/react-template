import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Bell as BellIcon } from 'icons';
import { UserCircle as UserCircleIcon } from 'icons';
import { Users as UsersIcon, User as UserIcon } from 'icons';
import { NavbarWrapper } from './index.style';
import { MAvatar, MBadge, MBox, MIconButton, MPopper, MToolbar, MTooltip } from 'components';
import { ListItemIcon, ListItemText, MenuItem, MenuList, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';

const Navbar = (props: any) => {
	const { onSidebarOpen, ...other } = props;
	//for logout
    const navigate = useNavigate();
    const handleLogout = (): void => {
        localStorage.removeItem('token');
        // Write logout logic here
		navigate('/login', { replace: true })
    }
	//for logout
	return (
		<>
			<NavbarWrapper
				sx={{
					left: {
						lg: 280
					},
					width: {
						lg: 'calc(100% - 280px)'
					}
				}}
				{...other}>
				<MToolbar
					disableGutters
					sx={{
						minHeight: 64,
						left: 0,
						px: 2
					}}
				>
					<MIconButton
						onClick={onSidebarOpen}
						sx={{
							display: {
								xs: 'inline-flex',
								lg: 'none'
							}
						}}
					>
						<MenuIcon fontSize="small" />
					</MIconButton>
					<MTooltip title="Search">
						<IconButton sx={{ ml: 1 }}>
							<SearchIcon fontSize="small" />
						</IconButton>
					</MTooltip>
					<MBox sx={{ flexGrow: 1 }} />
					<MTooltip title="Contacts">
						<IconButton sx={{ ml: 1 }}>
							<UsersIcon fontSize="small" />
						</IconButton>
					</MTooltip>
					<MTooltip title="Notifications">
						<IconButton sx={{ ml: 1 }}>
							<MBadge
								badgeContent={4}
								color="primary"
								variant="dot"
							>
								<BellIcon fontSize="small" />
							</MBadge>
						</IconButton>
					</MTooltip>
					<MPopper
					trigger={
						<MAvatar
							sx={{
								height: 40,
								width: 40,
								ml: 1
							}}
						>
							<UserCircleIcon fontSize="small" />
						</MAvatar>
					}
					placement='bottom-end'
					>
						<MenuList id="menu-list-grow">
							<MenuItem onClick={handleLogout}>
								<ListItemIcon>
									<LogoutIcon />	
								</ListItemIcon>
								<ListItemText>
									Logout
								</ListItemText>
							</MenuItem>
							<MPopper
							trigger={
								<MenuItem >
									<ListItemIcon>
										<SettingsIcon />	
									</ListItemIcon>
									<ListItemText>
										Settings
									</ListItemText>
								</MenuItem>
							}
							placement="left-start"
							>
								<MenuList id="menu-list-grow">
									<MenuItem onClick={() => navigate('/profile')}>
										<ListItemIcon>
											<UserIcon />	
										</ListItemIcon>
										<ListItemText>
											Profile
										</ListItemText>
									</MenuItem>
								</MenuList>
							</MPopper>
						</MenuList>
					</MPopper>
				</MToolbar>
			</NavbarWrapper>
		</>
	);
};

export default Navbar;

import { Box, Divider, Drawer, useMediaQuery } from '@mui/material';
import { BarChart as BarChartIcon, Users as UsersIcon } from 'icons';
import SideNav from './SideNav';

const items = [
	{
		href: '/',
		icon: (<BarChartIcon fontSize="small" />),
		title: 'Dashboard'
	},
	{
		href: '/customers',
		icon: (<UsersIcon fontSize="small" />),
		title: 'Customers',
        children:[ 
            {
                href: '/customers/list',
                icon: (<UsersIcon fontSize="small" />),
                title: 'List',
            },
        ]
	}
];

export const Sidebar = (props: any) => {
	const { open, onClose } = props;
	const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'), {
		defaultMatches: true,
		noSsr: false
	});

	const content = (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					height: '100%'
				}}
			>
				<div>
					<Box sx={{ p: 3 }}>
                        <img alt='logo' src='/logo.png' />
					</Box>
				</div>
				<Divider
					sx={{
						borderColor: '#2D3748',
						my: 3
					}}
				/>
				<Box sx={{ flexGrow: 1 }}>
                    <SideNav
                        items={items}
                    />
				</Box>
			</Box>
		</>
	);

	if (lgUp) {
		return (
			<Drawer
				anchor="left"
				open
				PaperProps={{
					sx: {
						backgroundColor: 'neutral.900',
						color: '#FFFFFF',
						width: 280
					}
				}}
				variant="permanent"
			>
				{content}
			</Drawer>
		);
	}

	return (
		<Drawer
			anchor="left"
			onClose={onClose}
			open={open}
			PaperProps={{
				sx: {
					backgroundColor: 'neutral.900',
					color: '#FFFFFF',
					width: 280
				}
			}}
			sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
			variant="temporary"
		>
			{content}
		</Drawer>
	);
};

export default Sidebar;

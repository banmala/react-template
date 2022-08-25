import { useState } from 'react';
import { MBox } from 'components';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { MainLayoutWrapper } from './index.style';

const MainLayout = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

	return (
		<>
			<MainLayoutWrapper>
				<MBox
					sx={{
						display: 'flex',
						flex: '1 1 auto',
						flexDirection: 'column',
						width: '100%'
					}}
				>
					{children}
				</MBox>
			</MainLayoutWrapper>
            <Navbar onSidebarOpen={() => setSidebarOpen(true)} />
			<Sidebar 
                onClose={() =>  setSidebarOpen(false)}
                open={isSidebarOpen}
            />
		</>
	)
}

export default MainLayout;

import { Fragment, useEffect, useState } from 'react';
import { MButton, MBox, MListItem } from 'components'
import { useNavigate, useLocation } from 'react-router-dom';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Collapse } from '@mui/material';
import { SideNavProps, NavItemProps, NestedNavItemProps } from './interface/MainLayout.interface';

const getParent = ( hrefLink : string) =>{
    const tempParents = hrefLink.split("/")
    if(tempParents[0] === ""){
        tempParents.splice(0,1)
    }
    let temp:string =""
    const parents = tempParents.map((parent)=>{
        temp = temp + "/" + parent
        return(temp)
    })
    return parents;
}

const NavItem = ({child, open, icon, title, handleClick, href}: NavItemProps) => {
    const location = useLocation()
    const active = href ? getParent(location.pathname).includes(href) : false
    const current = href ?  location.pathname === href : false
    return (
        <MListItem
            disableGutters
            sx={{
                display: 'block',
                mb: 0.5,
                py: 0,
                px: 2
            }}
        >
            <MBox
                sx={{
                    backgroundColor: active ? 'rgba(255,255,255, 0)' : 'transparent',
                    borderRadius: 1
                }}
            >
                <MButton
                    onClick={handleClick}
                    component="a"
                    startIcon={icon}
                    disableRipple
                    sx={{
                        // backgroundColor: active && 'rgba(255,255,255, 0.08)',
                        backgroundColor: (current && active && 'rgba(255,255,255, 0.08)') || (active && 'rgba(255,255,255, 0)'),
                        borderRadius: 1,
                        color: active ? 'secondary.main' : 'neutral.300',
                        fontWeight: active && 'fontWeightBold',
                        justifyContent: 'flex-start',
                        px: 3,
                        textAlign: 'left',
                        textTransform: 'none',
                        width: '100%',
                        '& .MuiButton-startIcon': {
                            color: active ? 'secondary.main' : 'neutral.400',
                        },
                        '&:hover': {
                            backgroundColor: 'rgba(255,255,255, 0.08)'
                        }
                    }}
                >
                    <MBox sx={{ flexGrow: 1 }}>
                        {title}
                    </MBox>
                    {child && (open ? <ExpandLess /> : <ExpandMore />)}
                </MButton>
            </MBox>
        </MListItem>
    )
}

const NestedNavItem = ({child, icon, title, item, href}: NestedNavItemProps) => {
    const [open, setOpen] = useState<boolean>(false);
    const location = useLocation();

    useEffect(()=>{
        const isOpen = href ? getParent(location.pathname).includes(href) : false
        setOpen(isOpen);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <>
            <NavItem href={href} child={child} open={open} icon={icon} title={title} handleClick={handleClick}/>
            <Collapse in={open} timeout="auto">
                <MBox sx={{pl:2}}>
                    <SideNav items={item.children} />
                </MBox>
            </Collapse>
        </>
    )
}

const SideNav = (props: SideNavProps) => {
    const {items} = props;
	const navigate = useNavigate();

	const handleNavigation = (href: string) => {
        navigate(href)
	}

    return (
        <>
            {
                items.map((item: any) => {
                    const { icon, title, href } = item

                    return (
                        <Fragment key={href}>
                            {(item.children && item.children.length) ? (
                                <NestedNavItem
                                    item={item}
                                    child={item.children}
                                    icon={icon}
                                    title={title}
                                    href={href}
                                /> 
                            ) : (
                                <NavItem
                                    icon={icon}
                                    title={title}
                                    handleClick={() => handleNavigation(href)}
                                    href={href} 
                                />        
                            )}
                        </Fragment>
                    )
                })
            }
        </>
    )
};

export default SideNav;

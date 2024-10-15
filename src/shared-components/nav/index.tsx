import {Link} from 'react-router-dom'
import {AppBar} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import useNavbar from "./index.hook";
import ThemeSwitch from "../theme-switch";
import {NAV_ROUTES, ROUTES} from "../../routes";

import './styles.scss'

const Navbar = () => {
    const {pathName, toggleTheme, addNewChartHandler} = useNavbar()

    return (<AppBar position="fixed"
                    color={'transparent'}
                    elevation={0}>
        <Container maxWidth={false} className={'nav-class'}>
            <Toolbar disableGutters className={'nav-container'}>
                <NavLeft pathName={pathName}/>
                <NavRight toggleTheme={toggleTheme} addNewChartHandler={addNewChartHandler}/>
            </Toolbar>
        </Container>
    </AppBar>)
}


export default Navbar;

const NavLeft = ({pathName = ''}: { pathName: string }) => {
    return <div className={'nav-left-container'}>{NAV_ROUTES.map(item => {
        const {route = '/'} = item
        const active = (route === ROUTES.default && pathName === ROUTES.default) ||
        (route !== ROUTES.default && pathName.includes(route)) ? 'active' : ''

        return <Link key={`nav-button-${route}`}
                     className={`nav-btn ${active}`} to={route}>
            <img src={'favicon.ico'} height={30}/> <b>FRED</b>

        </Link>
    })}</div>
}

const NavRight = ({toggleTheme, addNewChartHandler}: any) => {
    return <div>
        <Button variant="contained" size="small" onClick={addNewChartHandler}>Add Chart</Button>
        <ThemeSwitch sx={{m: 1}} defaultChecked onChange={toggleTheme}/></div>
}

import Box from '@mui/material/Box';

import Navbar from "../nav";
import useTheme from "../../theme/useThemeContext.hook";

import './styles.scss'

const DefaultLayout = (props: any) => {
    const {isDark} = useTheme()
    return <Box className={`${isDark ? 'is-dark' : 'is-light'}`} flex={1}>
        <Navbar/>
        <div className={'page-container'} style={{minHeight: '100vh'}}>
            {props.children}
        </div>
    </Box>
}
export default DefaultLayout

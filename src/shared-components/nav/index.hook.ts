import {useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";

import useTheme from "../../theme/useThemeContext.hook";
import {setChartToggle} from "../../features/main-slice";

const useNavbar = () => {
    const {toggleTheme} = useTheme()
    const location = useLocation();
    const pathName = location.pathname
    const dispatch = useDispatch()

    const addNewChartHandler = () => {
        dispatch(setChartToggle(true))
    }

    return {pathName, toggleTheme, addNewChartHandler}
}

export default useNavbar;

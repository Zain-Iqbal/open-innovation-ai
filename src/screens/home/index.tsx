import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {
    addChartStateSelector,
    chartListStateSelector,
    deleteInfoStateSelector,
    editChartIdStateSelector
} from "../../selectors/main-selector";
import EditInfo from "./modals/edit-info";
import useTheme from "../../theme/useThemeContext.hook";
import {modalResetHandler} from "../../features/main-slice";
import ChartList from "./components/chart-list";
import {IChartData} from "../../interface";
import DeleteInfo from "./modals/delete-info";
import EmptyPage from "./components/empty-page";

import './styles.scss'

const Home = () => {
    const {isDark} = useTheme()
    const dispatch = useDispatch()
    const addChart = useSelector(addChartStateSelector)
    const chatList = useSelector(chartListStateSelector)
    const editChartId = useSelector(editChartIdStateSelector)
    const deleteChart = useSelector(deleteInfoStateSelector)

    useEffect(() => {
        dispatch(modalResetHandler())
    }, [])


    return <div className={'home-container'}>
        {chatList.map((item: IChartData, index: number) => <ChartList key={`chart-list-${index}`}
                                                                      item={item}
                                                                      isDark={isDark}
                                                                      chartId={index}/>)}
        {!!!chatList.length && <EmptyPage/>}
        {addChart && <EditInfo open={addChart}
                               editChartId={editChartId}
                               isDark={isDark}/>}

        {!!deleteChart && <DeleteInfo data={deleteChart}
                                      isDark={isDark}/>}
    </div>
}

export default Home

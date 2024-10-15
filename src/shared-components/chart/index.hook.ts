import {useDispatch} from "react-redux";
import {createTheme} from '@mui/material/styles';

import {modifyChartDataById} from "../../features/main-slice";
import {IChart} from "../../interface";
const useChart = (props: Partial<IChart>) => {
    const {
        isDark = false,
        chartId,
        selectedDataHandler
    } = props

    const dispatch = useDispatch()
    const newTheme = createTheme({palette: {mode: isDark ? 'dark' : 'light'}})
    function setAxisData(value: any) {
        if (!!selectedDataHandler) {
            selectedDataHandler(value.dataIndex)
        }
    }
    function setStrokeSpace(e: any) {
      dispatch(modifyChartDataById({id: chartId, data:{strokeSpace: e.target.value}}))
    }

    const setVertical =(val: boolean)=>{
        dispatch(modifyChartDataById({id: chartId, data:{vertical:val}}))
    }

    const setHorizontal =(val: boolean)=>{
        dispatch(modifyChartDataById({id: chartId, data:{horizontal:val}}))
    }

    return {
        setStrokeSpace,
        newTheme,
        setVertical,
        setHorizontal,
        setAxisData
    }
}

export default useChart

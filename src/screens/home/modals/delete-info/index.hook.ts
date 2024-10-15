import {useDispatch} from "react-redux";

import {deleteChartHandler, setChartDeleteInfo} from "../../../../features/main-slice";


const useDeleteInfo = (props) => {
    const {data} = props
    const {chartId} = data

    const dispatch = useDispatch()


    const close = () => {
        dispatch(setChartDeleteInfo(null))
    }

    const deleteAction = () => {
        dispatch(deleteChartHandler({chartId}))
        close()
    }

    return {close,deleteAction}
}
export default useDeleteInfo

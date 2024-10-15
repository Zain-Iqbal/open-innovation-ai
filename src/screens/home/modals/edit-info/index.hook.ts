import {useForm} from "react-hook-form"
import {useDispatch, useSelector} from "react-redux";

import {modifyChartData, setChartEditOption} from "../../../../features/main-slice";
import {selectedChartStateSelector} from "../../../../selectors/main-selector";

import {Tableau10} from "../../../../theme/constants";
import {CHART_TYPE} from "../../../../utils/constants";
import {IChartData, IEditModal} from "../../../../interface";

const INPUT_LIST = [
    {
        name: 'page_title',
        isTextArea: false,
        label: 'Title',
        required: true,
        placeHolder: 'Enter chart title'
    }, {
        name: 'page_search',
        isTextArea: false,
        label: 'Search Text',
        required: false,
        placeHolder: 'Enter search query text'
    },
    {
        name: 'xAxis_label',
        isTextArea: false,
        label: 'X-Axis label',
        required: true,
        placeHolder: 'Enter graph X-Axis label'
    },
    {
        name: 'yAxis_label',
        isTextArea: false,
        label: 'Y-Axis label',
        required: true,
        placeHolder: 'Enter graph Y-Axis label'
    },

]

const defaultData = {
    color: Tableau10[0],
    chartType: CHART_TYPE.line,
    page_title:'Unnamed',
    page_search:'STLFSI',
    yAxis_label:'Popularity',
    xAxis_label:'Series Count',
    vertical: false,
    horizontal: false,
    strokeSpace: '0'
}

const useEditInfo = (props: IEditModal) => {
    const { editChartId} = props
    const dispatch = useDispatch()
    const data = useSelector(selectedChartStateSelector)

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({defaultValues: editChartId !== null ? data : defaultData})

    const closeHandler = () => {
        dispatch(setChartEditOption({addChart: false, chartId: null}))
    }

    const onSubmit = (newData: Partial<IChartData>) => {
        const {page_search = ''} = newData
        dispatch(modifyChartData({
            ...defaultData,
            ...newData, page_search
        }))
        closeHandler()

    }

    return {INPUT_LIST, register, handleSubmit, onSubmit, errors, closeHandler}
}
export default useEditInfo

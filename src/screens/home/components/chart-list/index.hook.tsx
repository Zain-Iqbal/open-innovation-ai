import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import {useGetGraphDataQuery} from "../../../../features/api/inject-endpoint-api";
import {modifyChartDataById, setChartDeleteInfo, setChartEditOption} from "../../../../features/main-slice";

const useChartList = ({
                          chartId,
                          page_title,
                          page_search
                      }: { chartId: null | number, page_title: string, page_search: string }) => {
    const dispatch = useDispatch()
    const [selectedData, setSelectedData] = useState(null)

    const {
        data = {},
        isFetching = true,
        isError,
        isSuccess
    } = useGetGraphDataQuery({series_id: page_search},
        {refetchOnMountOrArgChange: true})
    const {tags = []} = data || {}
    const hasData = !!tags.length

    const selectedDataHandler = (index: number | null = null) => {
        setSelectedData(index != null ? tags[index] : null)
    }

    useEffect(() => {
        setSelectedData(null)
    }, [isFetching])

    const editToggle = () => {
        dispatch(setChartEditOption({addChart: true, chartId}))
    }

    const deleteAction = () => {
        dispatch(setChartDeleteInfo({chartId: chartId, chartTitle: page_title}))
    }

    const setColor = (val: string) => {
        dispatch(modifyChartDataById({id: chartId, data: {color: val}}))
    }

    const setChartType = (val: string) => {
        dispatch(modifyChartDataById({id: chartId, data: {chartType: val}}))
    }

    const chartTypeHandler = (e: any) => {
        const val = e?.target?.value
        setChartType(val)
    }

    return {
        isFetching,
        setColor,
        hasData,
        chartTypeHandler,
        editToggle,
        isSuccess,
        isError,
        tags,
        deleteAction,
        selectedData,
        selectedDataHandler
    }
}

export default useChartList

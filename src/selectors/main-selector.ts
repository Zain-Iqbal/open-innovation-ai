import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../app/store";

const addChartState = (state: RootState) => state.main.addChart
const editChartIdState = (state: RootState) => state.main.chartId
const chartListState = (state: RootState) => state.main.chartList
const deleteInfoState = (state: RootState) => state.main.deleteInfo



export const addChartStateSelector = createSelector(addChartState, val => val)
export const editChartIdStateSelector = createSelector(editChartIdState, val => val)
export const  chartListStateSelector = createSelector(chartListState, val => val)
export const  deleteInfoStateSelector = createSelector(deleteInfoState, val => val)
export const  selectedChartStateSelector = createSelector([editChartIdState, chartListState], (chartId, chartList)=>{
    return chartList[chartId]
})



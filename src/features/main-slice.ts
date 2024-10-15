import {createSlice} from '@reduxjs/toolkit'

import {IMainSlice} from "../interface";


const initialSate: IMainSlice = {
  addChart: false,
    chartId : null,
    chartList:[],
    deleteInfo: null
}

export const detailSlice = createSlice({
    name: 'mainSlice',
    initialState: initialSate,
    reducers: {
        setChartToggle: (state, action) => {
            state.addChart = action.payload
        },
        setChartEditOption: (state, action) => {
            state.addChart = action.payload.addChart
            state.chartId = action.payload.chartId
        },
        modifyChartData: (state, action) => {
            if(state.chartId === null){
                state.chartList.unshift(action.payload)
            }else{
                state.chartList[state.chartId] = {...state.chartList[state.chartId] , ...action.payload}

            }
        },
        modifyChartDataById: (state, action) => {
            const {id, data} = action.payload
            state.chartList[id] = {...state.chartList[id] , ...data}
        },
        setChartDeleteInfo: (state, action) => {
            state.deleteInfo = action.payload
        },
        deleteChartHandler: (state, action) => {
            const {chartId} = action.payload
           state.chartList.splice(chartId, 1)
        },
        modalResetHandler: (state) => {
       state.addChart= false
       state.chartId= null
       state.deleteInfo= null
        },
    },

})

export const {
    modifyChartData,
    setChartToggle,
    modifyChartDataById,
    setChartEditOption,
    setChartDeleteInfo,
    deleteChartHandler,
    modalResetHandler
} = detailSlice.actions

export default detailSlice.reducer

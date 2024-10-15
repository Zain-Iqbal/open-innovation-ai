export interface IChartData {
    page_title: string
    page_search: string
    xAxis_label: string
    yAxis_label: string
    color: string
    chartType: string
    vertical: boolean
    horizontal: boolean
    strokeSpace: string | number
}


export interface IDeleteInfo {
    chartId: string,
    chartTitle: string
}

export interface IDeleteModal {
    isDark: boolean
    data: IDeleteInfo
}


export interface IEditModal {
    open: boolean,
    isDark: boolean,
    editChartId: null | number,
}


export interface IMainSlice {
    addChart: boolean,
    chartId: null | number,
    chartList: IChartData[],
    deleteInfo: IDeleteInfo | null
}

export interface IChart {
    data?: any[]
    item: IChartData
    chartId: null | number,
    selectedDataHandler?: (val: number | null) => void,
    isDark: boolean
}

export interface IItemDetailHome {
    selectedData: {
        created: string
        group_id: string
        name: string
        notes: string | null
        popularity: number
        series_count: number
    }
    close: () => void
}

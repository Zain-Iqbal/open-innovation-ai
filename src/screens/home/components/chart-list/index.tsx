import React from "react";
import Box from '@mui/material/Box';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Skeleton from '@mui/material/Skeleton';

import useChartList from "./index.hook";
import Chart from "../../../../shared-components/chart";
import ColorPalette from "../../../../shared-components/color-palette";
import { CHART_TYPE_OPTIONS} from "../../../../utils/constants";
import ItemDetailHome from "../item-detail-home";
import {IChart} from "../../../../interface";

const ChartList: React.FC<IChart> = (props) => {
    const {isDark, chartId, item} = props
    const {color, page_title, chartType, page_search} = item || {}

    const {
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
    } = useChartList({chartId, page_title, page_search})



    return <div className={'page-section'}>
        <div className={'header mt-1'}>
            <div className={'title'}><p>{page_title}</p>
                {isFetching && <i className="fa fa-spinner fa-spin"></i>}
                {!isFetching && <i className="fa-solid fa-pen-to-square"
                                   onClick={editToggle}></i>}
            </div>
            <i className="fa fa-trash" onClick={deleteAction}/>
        </div>
        {isSuccess && hasData && <div className={'graph-container'}>
            <div className={'header'}>
                <ColorPalette
                    color={color}
                    setColor={setColor}/>
                {isSuccess && hasData && <ChartTypeDropDown
                    chartTypeHandler={chartTypeHandler}
                    isDark={isDark}
                    chartType={chartType}/>}
            </div>

            {<Chart data={tags}
                    item={item}
                    chartId={chartId}
                    selectedDataHandler={selectedDataHandler}
                    isDark={isDark}/>}

        </div>}


        {selectedData && <ItemDetailHome selectedData={selectedData}
        close={selectedDataHandler}/>}

        <FallBackChart
            condition={isError || (!hasData && !isFetching)}
            text={'Something went wrong or data not found.'}
            url={'no-data.png'}
        />

        <ChartLoading
            condition={isFetching && !hasData}
        />
    </div>
}

export default ChartList

const FallBackChart = ({condition, text, url}: { condition: boolean, text: string, url: string }) => {
    return condition ? <div className={'inner-empty-wrapper'}>
        <img src={url} width={'50%'}/>
        <p>{text}</p>
    </div> : null
}

const ChartLoading = ({condition}: { condition: boolean }) => {
    return condition ? <div className={'graph-container'}>
        <div className={'header'}>
            <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={150} />
            <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={120}/>
        </div>
        <>
            <Box mt={1} display={'flex'} gap={3} alignItems={'center'}>
                <Skeleton variant="rectangular" width={40} height={40} />
                <Skeleton variant="rectangular" width={40} height={40} />
                <Skeleton variant="rectangular" width={150} height={40} />

            </Box>
        </>
        <Box mt={3}>
        <Skeleton variant="rectangular" height={400} />
        </Box>

    </div>: null
}


const ChartTypeDropDown = ({chartTypeHandler, chartType, isDark}: { chartTypeHandler: (value: unknown) => void, chartType: string, isDark: boolean }) => {
    return <Box display={'flex'} justifyContent={'end'}>
        <Select className={'drop-down-type'} onChange={chartTypeHandler} value={chartType}>
            {Object.values(CHART_TYPE_OPTIONS)
                .map(item => <MenuItem className={isDark ? 'dropdown-dark' : undefined} key={item.value}
                                       value={item.value}>
                    {item.label}
                </MenuItem>)}
        </Select>
    </Box>
}

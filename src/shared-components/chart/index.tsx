import React from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {BarPlot} from '@mui/x-charts/BarChart';
import {LinePlot, MarkPlot} from '@mui/x-charts/LineChart';
import {ChartsXAxis} from '@mui/x-charts/ChartsXAxis';
import {ChartsYAxis} from '@mui/x-charts/ChartsYAxis';
import {ChartsGrid} from '@mui/x-charts/ChartsGrid';
import {ChartsTooltip} from '@mui/x-charts/ChartsTooltip';
import {CHART_TYPE} from "../../utils/constants";
import {ThemeProvider} from '@mui/material/styles';
import {ChartsOnAxisClickHandler} from '@mui/x-charts';
import {ResponsiveChartContainer} from '@mui/x-charts/ResponsiveChartContainer';

import useChart from "./index.hook";

import {IChart} from "../../interface";

const Chart: React.FC<IChart> = (props) => {
    const {
        setStrokeSpace,
        newTheme,
        setVertical,
        setHorizontal,
        setAxisData
    } = useChart(props)

    const {
        data,
        item,
    } = props
    const {
        color = '#000',
        yAxis_label = '',
        xAxis_label = '',
        horizontal,
        strokeSpace,
        vertical,
        chartType
    } = item
    const isLine = chartType === CHART_TYPE.line

    const yAxis = data.map(item => item.popularity)
    const xAxis = data.map(item => item.series_count)


    const sliderSection = <Box width={150}>
        <p className={'normal-text'}>Stroke Space</p>
        <Slider
            valueLabelDisplay="auto"
            onChange={setStrokeSpace}
            value={Number(strokeSpace)}
            step={1}
            marks
            min={0}
            max={10}
        />
    </Box>

    const toggleSections = <Box width={700} mt={2} display={'flex'} gap={3} alignItems={'center'}>
        <div className={`option ${vertical ? 'selected' : undefined}`} onClick={() => setVertical(!vertical)}>
            <i className="fa-solid fa-arrows-up-down"></i>
        </div>
        <div className={`option ${horizontal ? 'selected' : undefined}`} onClick={() => setHorizontal(!horizontal)}>
            <i className="fa-solid fa-arrows-left-right"></i>
        </div>
        {isLine && sliderSection}
    </Box>


    return <ThemeProvider theme={newTheme}>
        {toggleSections}
        <br/>
        <ResponsiveChartContainer
            sx={{
                '& .MuiLineElement-root': {
                    strokeDasharray: `5 ${strokeSpace}`,
                    strokeWidth: 2,
                },
            }}
            xAxis={[{data: xAxis, scaleType: 'band', reverse: horizontal}]}
            yAxis={[{reverse: vertical}]}
            series={[
                {
                    type: isLine ? 'line' : 'bar',
                    data: yAxis,
                    color,
                    label: yAxis_label,
                },
            ]}

            height={450}
            margin={{top: 10}}
        >
            <ChartsOnAxisClickHandler onAxisClick={(_, d) => setAxisData(d)}/>
            <ChartsGrid vertical horizontal/>
            <LinePlot/>
            <BarPlot/>
            <ChartsXAxis label={xAxis_label}/>
            <ChartsYAxis label={yAxis_label}/>
            <MarkPlot/>
            <ChartsTooltip/>

        </ResponsiveChartContainer>
    </ThemeProvider>
}

export default Chart

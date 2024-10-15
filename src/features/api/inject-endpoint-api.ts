import {apiSlice} from './index'

export const Url_List = {
    series: `/series/tags`,
}
const apiKey = import.meta.env.VITE_APP_FRED_KEY;
export const injectEndpointApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getGraphData: builder.query({
            query: (data) => ({
                url: `${Url_List.series}?series_id=${data.series_id}&api_key=${apiKey}&file_type=json`,
                method: 'GET',
            }),
        })
    }),
})

export const {
    useGetGraphDataQuery,
} = injectEndpointApi


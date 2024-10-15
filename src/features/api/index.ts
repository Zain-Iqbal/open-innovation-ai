import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {BASE_URL_PARTIAL} from "../../utils/constants";
import {BaseQueryApi} from "@reduxjs/toolkit/src/query/baseQueryTypes";

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL_PARTIAL,
    prepareHeaders: (headers) => {
        headers.set('Accept','application/json')
        headers.set('Content-Type','application/json')
        return headers;
    },
})

const baseQueryGetHeaderToken = async (args:any, api:BaseQueryApi, extraOptions:{}) => {
    let result = await baseQuery(args, api, extraOptions)
    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryGetHeaderToken,
    tagTypes: ['Chart'],
    endpoints: () => ({})
})


let BASE_URL_PARTIAL = `/api`

export enum CHART_TYPE {
    'bar'='bar',
    'line'='line'
}
export const CHART_TYPE_OPTIONS = {
    [CHART_TYPE.bar]:{label: 'Bar Chat', value: CHART_TYPE.bar},
    [CHART_TYPE.line]:{label: 'Line Chat', value: CHART_TYPE.line},
}

export { BASE_URL_PARTIAL}

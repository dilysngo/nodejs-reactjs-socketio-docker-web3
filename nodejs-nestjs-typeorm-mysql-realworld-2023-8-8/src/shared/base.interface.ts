export interface BaseResponse<T> {
    statusCode: number;
    message?: string;
    data?: T;
    error?: any
    [t: string]: any
}

export interface BaseListResponse<T> extends BaseResponse<T> {
    page: number;
    pageSize: number;
    total: number;
}
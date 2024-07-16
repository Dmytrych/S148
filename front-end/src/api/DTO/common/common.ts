export interface Metadata {
    pagination: PaginationMetadata;
}

export interface PaginationMetadata {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

export type CmsModel<TAttributes> = {
    id: number;
    attributes: TAttributes
}

export type CmsData<TData> = {
    data: TData
}
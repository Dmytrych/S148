export interface Metadata {
    pagination: PaginationMetadata;
}

export interface PaginationMetadata {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

export interface CmsModel<TAttributes> {
    id: number;
    attributes: TAttributes
}
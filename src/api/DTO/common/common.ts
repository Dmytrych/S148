export interface Metadata {
    pagination: PaginationMetadata;
}

export interface PaginationMetadata {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

export interface ApiImage {
    code: string;
    name: string;
    price: number;
    description?: string;
    shortDescription?: string;
}

export interface CrmModel<TAttributes> {
    id: number;
    attributes: TAttributes
}
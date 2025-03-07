export type DatasetStatus = 'uploaded' | 'processing' | 'processed' | 'reviewing' | 'completed' | 'error';
export interface Dataset {
    _id: string;
    datasetId: string;
    status: DatasetStatus;
    filename: string;
    size: number;
    link: string;
    uploadedAt: Date;
    userId: string;
    processedAt?: Date;
}
export interface DatasetResponse {
    datasetId: string;
    status: DatasetStatus;
    filename: string;
    size: number;
    link: string;
    uploadedAt: string;
}
export interface DatasetList {
    datasets: DatasetResponse[];
}
export interface DeleteResponse {
    message: string;
}
export interface ProcessingResponse {
    datasetId: string;
    status: string;
    message: string;
}

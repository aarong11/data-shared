export interface DatasetProcessingJob {
    datasetId: string;
    userId: string;
    filePath: string;
}
export declare const QUEUES: {
    readonly DATASET_PROCESSING: "dataset_processing";
};

export interface DatasetProcessingJob {
  datasetId: string;
  userId: string;
  filePath: string;
}

export const QUEUES = {
  DATASET_PROCESSING: 'dataset_processing'
} as const;
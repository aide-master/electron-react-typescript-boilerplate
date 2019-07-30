interface DfResult {
  fileSystem: string;
  blocks: number;
  used: number;
  available: number;
  capacity: number;
  iused: number;
  ifree: number;
  iusedPercent: number;
  mountOn: string;
}

export async function df (): Promise<DfResult> {
  throw new Error('Not Implemented Yet')
}

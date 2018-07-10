import { MongoDBDownload } from '@purple/mongodb-download';
export declare class MongoDBPrebuilt {
    mongoDBDownload?: MongoDBDownload;
    private debug;
    private binPath;
    constructor(mongoDBDownload?: MongoDBDownload);
    getHomeDirectory(): string;
    getBinPath(): Promise<string>;
    private resolveBinPath;
    private hasValidBinPath;
}

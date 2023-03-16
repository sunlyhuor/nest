import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHostName(req: any): any;
    GooGle(): Promise<void>;
    googleProdiver(req: any, res: any): Promise<any>;
}

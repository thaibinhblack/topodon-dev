import { Endpoints } from './types';
export declare type APIError = {
    id: string;
    code: string;
    message: string;
    kind: 'client' | 'server';
    info: Record<string, number>;
};
export declare function isAPIError(reason: any): reason is APIError;
export declare type FetchLike = (input: string, init?: {
    method?: string;
    body?: string;
    credentials?: RequestCredentials;
    cache?: RequestCache;
}) => Promise<{
    status: number;
    json(): Promise<any>;
}>;
export declare class APIClient {
    origin: string;
    credential: string;
    fetch: FetchLike;
    constructor(opts: any);
    request(endpoint: Endpoints, params: {} | undefined, credential: string): Promise<unknown>;
}
//# sourceMappingURL=index.d.ts.map
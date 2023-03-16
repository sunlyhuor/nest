import { Strategy, VerifyCallback } from "passport-google-oauth2";
declare const GoogleProviderService_base: new (...args: any[]) => Strategy;
export declare class GoogleProviderService extends GoogleProviderService_base {
    constructor();
    validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any>;
}
export {};

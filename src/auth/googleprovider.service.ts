/*
https://docs.nestjs.com/providers#services
*/

import { Injectable , Header } from '@nestjs/common';
import { PassportStrategy }  from "@nestjs/passport"
import { Strategy , VerifyCallback} from "passport-google-oauth2"

@Injectable()
export class GoogleProviderService extends PassportStrategy(Strategy , "google") {
    constructor( ){
        super({
            clientID: "899251079071-ffsrqcvn8ihh7quraquu775egvf92fg7.apps.googleusercontent.com",
            clientSecret: "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",
            // callbackURL:  os.hostname()+"/auth/google/callback",
            callbackURL:  "http://localhost:3000/auth/google/callback",
            scope: ['profile', 'email'],
        })
    }

    async validate( accessToken:string , refreshToken:string , profile: any , done:VerifyCallback ):Promise<any>{
        const { id , name , emails , photos } = profile
        const user = {
            id:id,
            name:`${name.givenName} ${name.familyName}`,
            email:emails[0].value,
            photo:photos[0].value
        }

        done(null , user)
    }

}

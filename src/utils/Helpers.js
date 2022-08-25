// import jwt_decode from 'jwt-decode';
// import {JWTToken} from './interface/Utils.interface';

// export const hasTokenExpired = (token: string | null): boolean | undefined => {
//     if(token) {
//         const decodedToken: JWTToken = jwt_decode(token);
//         const expireTime: number = decodedToken.exp;
//         const currentTime: number = Date.now();
//         const isExpired: boolean = expireTime > currentTime;
        
//         return isExpired;
//     }
// }

import React from 'react'
import { useGoogleLogin } from '@react-oauth/google';

const GoogleLogin = () => {
    useGoogleLogin( {
        clientId: "1074926211630-bt64mbvkcfv94ng1vt6sc5v1sfkvs9fh.apps.googleusercontent.com",
        responseType: 'token',
        onSuccess: async ( tokenResponse ) => {
          const accessToken = tokenResponse?.access_token;
          if ( accessToken ) {
            fetchData(accessToken)
          }
          console.log("Login Success")
        },
        onError: ( error ) => {
          console.error( error );
        }
      } );
}

export default GoogleLogin
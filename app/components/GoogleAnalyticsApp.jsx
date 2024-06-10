"use client"
import React, {useEffect} from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios"


const GoogleAnalyticsApp = () => {
    const propertyId = '324458516';
    const startDate = '2024-01-01';
    const endDate = '2024-05-31';
  
    const googleLogin = useGoogleLogin( {
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
  
    const fetchData = async ( accessToken ) => {
      try {
        const metrics = [{ name: 'activeUsers' }];
        const dimensions = [{ name: 'country' }];
  
        const requestBody = {
          dateRanges: [{ startDate, endDate }],
          metrics,
          dimensions,
        };
  
        const headers = {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${ accessToken }`,
        };
  
        const apiResponse = await axios.post(
          `https://analyticsdata.googleapis.com/v1beta/properties/${ propertyId }:requestBody`,
          requestBody,
          { headers }
        );
  
        const responseData = apiResponse.data;
        console.log( "responseData", responseData );
      } catch ( error ) {
        console.error( error );
      }
    };
  
    useEffect( () => {
      if ( googleLogin.tokenResponse?.access_token ) {
        fetchData( googleLogin.tokenResponse.access_token );
      }
    }, [googleLogin.tokenResponse] );

    return (
      <div className="App">
        <h1>Google Analytics Report</h1>
        
        <button onClick={ googleLogin }>Check Analytics</button>
      </div>
    );
  };

export default GoogleAnalyticsApp 
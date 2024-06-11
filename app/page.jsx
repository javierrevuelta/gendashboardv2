import Image from "next/image";
import GoogleAnalyticsApp from "./components/GoogleAnalyticsApp";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col self-center justify-center">
        <h1 className="text-center text-4xl mb-10">Dashboard</h1>
        <h3 className="text-center text-2xl">A Generacion Ads Tool</h3>
        <GoogleOAuthProvider clientId={"1074926211630-bt64mbvkcfv94ng1vt6sc5v1sfkvs9fh.apps.googleusercontent.com"}>
          <GoogleAnalyticsApp/>
        </GoogleOAuthProvider>
      </div>
    </div>
  );
}

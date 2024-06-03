import Image from "next/image";
import GoogleAnalyticsApp from "./components/GoogleAnalyticsApp";

export default function Home() {

  return (
    <div className="flex flex-col ">
      <div className="flex flex-col self-center justify-center">
        <h1 className="text-center text-4xl mb-10">Dashboard</h1>
        <h3 className="text-center text-2xl">A Generacion Ads Tool</h3>
        <GoogleAnalyticsApp/>
      </div>
    </div>
  );
}

import { MetaFunction } from "@remix-run/react";
import { Suspense } from "react";
import LeftSectionProcure from "~/components/left-section-procure";
import LoadingTest from "~/components/loading-test";
import Success from "~/components/success";

export const meta: MetaFunction = () => {
  return [
    { title: "Ivoyant | Crafting Customer Driven Digital Experiences" },
    { name: "Contact Us", content: " Ivoyant Contact" },
  ];
};



export default function Index() {

  return (


    <div className="flex-container main-container image-height" style={{
      background: 'linear-gradient(108deg, rgba(255, 255, 255, 0.03) 100%, rgba(255, 255, 255, 0.63) 70.19%, rgba(6, 34, 122, 0.63) 70.06%), url(/assets/dirconnect.png) lightgray 50% / cover no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    
    }} >
      <div className="left-container left-section">
        <Suspense fallback={<LoadingTest />}>
          <LeftSectionProcure />
        </Suspense>
      </div>
      <div className="right-container">
        <Suspense fallback={<LoadingTest />}>
          <Success />
        </Suspense>
      </div>
    </div>
  );
}

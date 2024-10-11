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


    <div className="flex-container main-container" style={{
      backgroundImage: `url(/assets/bgimagenmsdc.png)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height:'100%'
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

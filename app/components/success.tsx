import videourl from "../../public/assets/success.mp4";
import ivurl from '../../public/assets/logo.svg';
import ivurl2 from '../../public/assets/logo-white.svg';
import { Link } from "@remix-run/react";

const MainTitle = ({ title }: { title: any }) => (
  <h1 className="self-center  main-title">
    {title}
  </h1>
);

const Subtitle = ({ children }: { children: any }) => (
  <p className="  subtitle">{children}</p>
);

const ActionLink = ({ children }: { children: any }) => (
  <p className="link-class">
    {children}
  </p>
);

// const Image = ({ src, alt }: { src: any, alt: any }) => (
//   <img loading="eager" src={src} alt={alt} className=" mt-18 w-full aspect-[4] fill-indigo-50" />
// );


function Success() {
  return (
    <section className="flex justify-between flex-col items-center h-full form-section-success pb-[0px]">
      <div className="items-center  text-center   form-container ">
        <div className="flex flex-row success-body  justify-center items-center object-contain gap-3 lg:gap-4 min-w-fit h-fit">
          <img
            src={ivurl}
            alt="iVoyant Logo"
            className="flex   logo-image object-contain logo-desk"
          />
           <img
            src={ivurl2}
            alt="iVoyant Logo white"
            className="flex   logo-image object-contain logo-mob"
          />

        </div>
        <video
          preload="true"
          muted
          loop
          playsInline
          src={videourl}
          autoPlay
          className="aspect-square w-[9.8125rem] video-class "
        />

        <article className="flex flex-col main-container-success max-w-full w-full">
          <MainTitle title="Thank you for sharing your details" />
          <Subtitle>Our team will reach out to you soon!</Subtitle>
        </article>
        <ActionLink>
          <span className="redirect-msg">To know how we are revolutionising various Industries{" "}</span>
          <Link to={'https://www.ivoyant.com/'}><div className="link">Click here</div></Link>
        </ActionLink>

      </div>


    </section>
  );
}

export default Success;
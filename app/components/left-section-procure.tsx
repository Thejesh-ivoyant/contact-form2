import tenyears from '../../public/assets/logotopdir.svg';
import top from '../../public/assets/bottom.svg';
import { useMatch } from '@remix-run/react';

function LeftSectionProcure() {
  const Success = useMatch("/success");
  const isSuccess = Success !== null;

  return (
    <section className="flex flex-col items-center px-4 text-center relative text-white h-full">
      <ImageWithAlt src={top} alt="spiral" class_name={"bottom-image"} />
      <div className='holder-procure'>
        <ImageWithAlt src={tenyears} alt="nmsdc" class_name={"image-procure"} />
        <section className="event-banner">
          <span className="event-location">OCTOBER 23, 2024</span>
          <span className="event-date">PALMER EVENTS CENTER, AUSTIN, TX</span>
        </section>
        <div className={`border-line ${isSuccess ? 'success-non-display' : ''}`}></div>
        <Header title="Get in Touch with us" isSuccess={isSuccess} />
        <TextBlock text="We excel in IT Services, Product Development, IT Consulting & Staffing Solutions" isSuccess={isSuccess} />
        <SubText text="Visit for more" isSuccess={isSuccess} />
        <TextBlockLink text="www.ivoyant.com" isSuccess={isSuccess} />
      </div>
    </section>
  );
}

function ImageWithAlt({ src, alt, class_name }:{src:any, alt:any, class_name:any}) {
  return (
    <img loading="eager" src={src} alt={alt} className={class_name} />
  );
}

// Update child components to accept isSuccess prop
function Header({ title, isSuccess }:{title:any, isSuccess:boolean}) {
  return (
    <h2 className={`header ${isSuccess ? 'success-non-display' : ''}`}>{title}</h2>
  );
}

function TextBlock({ text, isSuccess }:{text:any, isSuccess:boolean}) {
  return (
    <p className={`text-block ${isSuccess ? 'success-non-display' : ''}`}>{text}</p>
  );
}

function TextBlockLink({ text, isSuccess }:{text:any, isSuccess:boolean}) {
  return (
    <a href="https://www.ivoyant.com/" className={`text-block-link ${isSuccess ? 'success-non-display' : ''}`}>{text}</a>
  );
}

function SubText({ text, isSuccess }:{text:any, isSuccess:boolean}) {
  return (
    <small className={`subtext ${isSuccess ? 'success-non-display' : ''}`}>{text}</small>
  );
}

export default LeftSectionProcure;

import { Link } from '@remix-run/react'
const ErrorBoundaryPage = ({ error }: { error: any }) => {
    
    return (
    <div className="bg-white flex flex-col">
      <div className="self-center w-[913px] max-w-full mt-10 max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[58%] max-md:w-full max-md:ml-0">
            <div className="error-left-container  flex flex-col my-auto px-5 max-md:max-w-full max-md:mt-10 font-poppins">
              <div className="text-zinc-600 text-3xl font-bold leading-10">Oops....</div>
              <div className="text-zinc-600 text-2xl leading-8  mt-3">
              {error?.name} {error?.status}{' '}
              </div>
              <div className=" text-zinc-600 text-base leading-6 tracking-wide  mt-4 max-md:max-w-full">
              {error && error?.message ? 'Something Went Wrong' : ''}{' '}
                {error && error.status === 404
                  ? "This Page doesn't exist or was removed!"
                  : error?.statusText}
              </div>{' '}
              <Link to="/">
                <div className="justify-centeritems-center flex gap-1 mt-1 py-2 self-start">
                  <img
                    loading="lazy"
                    src="../assets/backarrow.svg"
                    alt="error"
                    className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                  />{' '}
                  <div className="text-blue-600 text-base self-stretch grow whitespace-nowrap">
                    Go back
                  </div>
                </div>
              </Link>
            </div>
          </div>{' '}
          <div className="flex flex-col items-stretch w-[42%] max-h-96 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex-col overflow-hidden relative flex aspect-square justify-center items-stretch max-md:mt-10 ">
              <img
                alt="error"
                loading="lazy"
                src="../assets/Err-door.png"
                className="absolute h-full w-full object-contain object-center inset-0 lg:max-w-lg max-w-md max-h-fit mx-auto"
              />{' '}
              <div className="relative flex flex-col items-stretch pt-5 pb-12 px-7 max-md:px-5"></div>
            </div>
          </div>
        </div>
      </div>{' '}
      <div className='err-bottom-container p-6'>
        <div className='grid my-auto'>
          <div className="text-neutral-800 text-base leading-8  whitespace-nowrap">
            Here are some helpful links instead
          </div>{' '}
          <Link to="https://www.ivoyant.com/contact-us/">
            <div className="text-blue-600 text-sm whitespace-nowrap mt-2.5 self-start">
              Contact us
            </div>{' '}
          </Link>
          
          <Link to="https://www.ivoyant.com/about-us/">
            <div className="text-blue-600 text-sm whitespace-nowrap mt-1.5 self-start">
              About us
            </div>{' '}
          </Link>
          
         
        </div>
        <svg className='h-full my-12 lg:block hidden' width="1" viewBox="0 0 1 144" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="1" height="144" transform="matrix(-1 0 0 1 1 0)" fill="#E8E8E8" />
        </svg>
        <div className='info lg:my-auto my-10'>
          <h2>Download our latest Website accessibility Guide</h2>
          <p>We have curated a Web accessibility guide for you, prepared by our Accessibility experts. </p>
          <button className='hue-btn-primary mt-4'>
            Download Guide
          </button>
        </div>
        <div className="image-container">
          <img
            alt="error"
            loading="eager"
            src="../assets/error-mobile.png"
          className="object-contain overflow-x-hidden"
          />
        </div>
      </div>
    </div>
  )
}
export default ErrorBoundaryPage

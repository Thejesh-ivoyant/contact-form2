import { useNavigation } from "@remix-run/react";
import LoadingImg from "~/../public/assets/ivoyant-white.png";
import { useEffect } from "react";
const LoadingTest = () => {
  const navigation = useNavigation()
  const isRoutingToAnotherPage = navigation.state === 'loading'
  useEffect(()=>{
  }, [isRoutingToAnotherPage])
  if (!isRoutingToAnotherPage){
    return null
  }
  console.log(navigation.state)
  return (
    <div className={`w-full h-full fixed z-[999] flex items-center justify-center bg-black ${(isRoutingToAnotherPage)? '' : 'hidden'}`}>
      <img src={LoadingImg} className="animate-pulse" alt="Ivoyant Logo" />
    </div>
  );
};
export default LoadingTest;

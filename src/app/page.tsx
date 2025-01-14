import Arrivals from "@/app/components/Arrival";
import DressStyle from "@/app/components/dressstyle";
import HappyCustomers from "@/app/components/happycustomer"; 
import Hero from "@/app/components/hero";  
import Selling from "@/app/components/selling"; 
import Herobuttom from "./components/herobuttom";



export default function Home() {
  return (
    <>
      <Hero />
      <Herobuttom />
      
      <div className="md:px-[100px]">
        <Arrivals />
        <Selling />
        <DressStyle />
        <HappyCustomers />
      </div>
    </>
  );
}

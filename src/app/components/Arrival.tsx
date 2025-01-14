// import { Card } from "@/components/ui/card"; // Ensure this path is correct

// export default function Arrivals() {
//   return (
//     <div className="bg-white flex items-center flex-col justify-center object-cover">
//       <h1 className="pt-5 font-integral text-[30px] md:text-[48px] font-bold leading-[57.6px]">
//         New Arrivals
//       </h1>
//       <div className="w-full h-fit flex md:flex-row flex-col items-center justify-between md:mx-[100px] gap-4 md:gap-8 md:mt-10">
//         {/* Card 1 */}
//         <Card
//           imageUrl="/p1.png"
//           title="T-SHIRT WITH TAPE DETAILS"
//           stars="/s1.png"
//           ranking="4.5/5"
//           price={120}
//           className="w-[200px] h-[200px] md:w-[295px] md:h-[298px] rounded-[13.42px] md:rounded-[20px] bg-[#F0EEED]"
//         />
//         {/* Card 2 */}
//         <Card
//           imageUrl="/p2.png"
//           title="SKINNY FIT JEANS"
//           stars="/s2.png"
//           ranking="4.5/5"
//           price={240}
//           className="w-[200px] h-[200px] md:w-[295px] md:h-[298px] rounded-[13.42px] md:rounded-[20px] bg-[#F0EEED]"
//         />
//         {/* Card 3 */}
//         <Card
//           imageUrl="/p3.png"
//           title="CHECKERED SHIRT"
//           stars="/s3.png"
//           ranking="4.5/5"
//           price={180}
//           className="hidden md:block md:w-[295px] md:h-[298px] md:rounded-[20px] md:bg-[#F0EEED]"
//         />
//         {/* Card 4 */}
//         <Card
//           imageUrl="/p4.png"
//           title="SLEEVE STRIPED T-SHIRT"
//           stars="/s4.png"
//           ranking="4.5/5"
//           price={130}
//           className="hidden md:block md:w-[295px] md:h-[298px] md:rounded-[20px] md:bg-[#F0EEED]"
//         />
//       </div>
//       <div className="md:mt-[150px]">
//         <button className="w-[358px] h-[46px] md:w-[295px] md:h-[52px] rounded-[62px] py-4 px-[54px] hover:bg-gray-200 flex items-center justify-center">
//           View All
//         </button>
//       </div>
//     </div>
//   );
// }





import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

interface Iproducts{
    title:string,
    price:string,
    id:number
    rating?:string,
    old_price?:string
    img_url:string
}

let product:Iproducts[] = [
    {
     title:"T-SHIRT WITH TAPE DETAILS",
     id:1,
     price:"$120",
     img_url:"/p1.png"
    },
    {
     title:"SKINNY FIT JEANS",
     id:2,
     price:"$120",
     img_url:"/p2.png",
     old_price:"$200"
    },
    {
     title:"CHECKERED SHIRT",
     id:3,
     price:"$120",
     img_url:"/p3.png"
    },
    {
     title:"SLEEVE STRIPED T-SHIRT",
     id:4,
     price:"$120",
     img_url:"/p4.png",
     old_price:"$200"

    }
]
// Adding key prop in star array
let star = [
    <FaStar key={1} />,
    <FaStar key={2} />,
    <FaStar key={3} />,
    <FaStar key={4} />,
    <FaStar key={5} />,
  ];
export default function Tshirts(){
    return(
        <div className="w-full h-full sm:h-[500px] mt-10  max-w-screen-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center">New Arrivals</h1>
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
                {
                    product.map((data)=>{
                        return(
                              <div key={data.id}>
                                 <Link href={`/products/${data.id}`}>
                                 <div className="w-[230px] h-[230px] bg-[#F0EEED] rounded-[20px]">
                                  <Image src={data.img_url} alt={data.title}
                                  className="w-full h-full rounded-[20px]"
                                 width={100} height={100}></Image>
                                 
                                  </div>
                                 </Link>
                                <div>
                                <p className="text-lg mt-2 font-bold">{data.title}</p>
                                <div className="flex text-yellow-400">
                                    {star.map((icon, index) => (
                                        <span key={index}>{icon}</span>
                                    ))}
                                </div>    
                                <p  className="font-bold mt-1">{data.price} <span className="text-gray-400 font-bold line-through"> {data.old_price} </span></p>
                                </div>
                              </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
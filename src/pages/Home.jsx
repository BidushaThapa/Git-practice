import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import HomeCard from "../components/HomeCard"
import { useRef } from "react"
const Home = () => {

const scrollRef =useRef(null)
const leftButton=()=>{
  scrollRef.current.scrollBy({left: -500,behaviour:"smooth"})
}
const rightButton=()=>{
  scrollRef.current.scrollBy({left: 500, behavior: "smooth" })
}
  
  return (
    <div className="h-screen w-full relative  ">
      <button onClick={leftButton} className=" absolute left-0  top-[10%] cursor-pointer border-2 rounded-md p-0.5 text-amber-500 border-white"> <FaArrowLeft/></button>
     <div ref={scrollRef} className="flex gap-6 p-6 no-scrollbar overflow-x-auto">
       <HomeCard title="PROJECT BACKLOG" className="flextext text-bold"/>
      <HomeCard title="SPRINT BACKLOG" className="flex text-bold" />
      <HomeCard title="TODO " className="flex text-bold"/>
      <HomeCard title="IN PROGRESS " className="flex text-bold"/>
      <HomeCard title="IN REVIEW " className="flex text-bold"/>
      <HomeCard title="DONE" className="flex text-bold"/>
     </div>
     <button onClick={rightButton} className=" absolute right-0  top-[10%] cursor-pointer border-2 rounded-md p-0.5 text-amber-500 border-white"> <FaArrowRight/></button>

    </div>
  )
}

export default Home


{/* <div className=" h-full  flex flex-col justify-center items-center align-middle px-4 py-2 gap-4">
        <h1 className="text-2xl  flex justify-center font-bold text-blue-500 ">Welcome to the website </h1>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ab recusandae quidem at natus. Rem quo velit quis quibusdam veritatis explicabo maiores sequi delectus eius sapiente laboriosam sit perferendis totam adipisci voluptas repellendus error iure, eum repellat porro ea quisquam aspernatur cupiditate atque. Numquam delectus, laborum, odio fugit voluptatem modi id optio voluptatibus atque, vero repellat ipsam! Fugiat, a dolor. Obcaecati nisi architecto aliquid, sint sapiente dolores quaerat nam distinctio, odio tenetur, velit eum repellat. Vel veniam itaque iure tenetur incidunt, dolorum doloremque quos alias modi minus, impedit, quis unde temporibus molestiae soluta enim ratione voluptate accusantium fugiat nihil eius.</p> */}
        
    {/* <button className="text-xl text-white ease-in-out bg-blue-400 transition hover:-translate-y-1.5 hover:scale-110 delay-150 duration-300 hover:bg-blue-600 p-2 rounded-2xl">
      Click Me
    </button> */} 
   
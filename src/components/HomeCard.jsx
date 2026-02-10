import { useEffect, useState } from "react";
import {  FaPlus } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
const HomeCard = ({title,className=""}) => {
    const [showInput,setShowInput]=useState(false)
    const [takeInput,setTakeInput]=useState()
    const[cards,setCards]=useState([])
    const handleClick=()=>{
        setShowInput(true)
    }
    const handleCross=()=>{
         setShowInput(false)
    }
   const deleteCard = (indexToDelete) => {
  setCards(prev => prev.filter((_, index) => index !== indexToDelete));
};

    useEffect(()=>{
      const storedCards=localStorage.getItem("cached-cards")
      if(storedCards){
        setCards(JSON.parse(storedCards))
      }
    },[])
    useEffect(()=>{
      localStorage.setItem("cached-cards",JSON.stringify(cards));
    },[cards])
    const handleAddCard=()=>{
       if (!takeInput.trim()) return;
       setCards(prev=>[...prev,takeInput])
       setTakeInput("");
       setShowInput(fasle)
        
    }
  

  
  return (
    <div className={` w-[320px] min-w-[320px] h-fit  flex flex-col gap-4 px-4 py-2   m-2 border-2 rounded-2xl border-amber-600 ${className} `} >
        <div> 
            <h1 className="text-amber-500 font-bold">{title}</h1>
        </div>
       {/* Cards */}
      <div className="flex flex-col gap-2">
        {cards.map((card, index) => (
          <>
        <div  key={index} className="relative ">
            <div
           
            className="bg-[#1a1f12] p-2 rounded-md"
          >
            {card}
          </div>
         <div
  onClick={() => deleteCard(index)}
  className="absolute right-1.5 top-2.5 cursor-pointer hover:text-amber-500"
>
  <RxCross1 />
</div>

        </div>
          </>
        ))}
      </div>

        {!showInput &&
     <div className="flex cursor-pointer gap-5 p-2 hover:bg-gray-800 rounded-2xl" onClick={handleClick}>
           <div className="flex items-center"> 
           <FaPlus />
            </div>
            <p >Add a Card</p>
     </div>
}
     {showInput &&
     <>
      <div className=" border-2 rounded-lg px-1 ">
          <input  className=" py-1 w-full h-[5vh] outline-none border-none"
         type="text" onChange={(e)=>setTakeInput(e.target.value) }
         placeholder="Enter a title or paste a link"/>
        
      </div>
       
       <div className="flex gap-4">
          <button  className="p-1 bg-blue-500 rounded-sm" onClick={handleAddCard}>Add Card</button>
            <div onClick={handleCross} className="flex cursor-pointer  items-center">
                <RxCross1/>
            </div>
       </div>
         </>
        }
    </div>
  )
}

export default HomeCard
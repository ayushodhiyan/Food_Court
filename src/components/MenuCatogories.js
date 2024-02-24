import { useState } from "react";


const MenuCatogories=({items})=>{
    const [open,setOpen]=useState(1);
    const [arrow,setArrow]=useState(1);
    const handleClick=()=>{
        if(open===1){
            const x=0;
            setOpen(x);
            setArrow(x);
    
        }
        else{
            const x=1;
            setOpen(x);
            setArrow(x);
        }
    }
        
    return(
        <div className=" ">
            <div className="rounded-lg my-4 shadow-lg p-2  border-b border-solid border-black hover:cursor-pointer  flex justify-between" onClick={handleClick}>
                <div className=" p-2 font-bold text-lg">
                {items.title}({items.itemCards.length})
                </div>
                <div className="p-2">
                     {(arrow===1)?(<h1>⬆️</h1>):<h1>⬇️</h1>}
                </div>
                
            </div>
            {(arrow===1)?
            <div className="">
            {items.itemCards.map((item)=>(
              <div className="py-10 border-b border-solid border-black flex justify-between" key={item.card.info.id}>
                  <div className="w-9/12">
                      <div>
                      {((item.card.info.itemAttribute.vegClassifier)==="VEG")?<h1>🟢</h1>:<h1>🔴</h1>}
                          
                      </div>
                      <div className="font-bold text-lg">{item.card.info.name}</div>
                      <div className="flex">
                        <div className="font-bold pr-1">₹{item.card.info.defaultPrice/100||item.card.info.price/100 }</div>
                        
                      </div>
                      <div className="w-[650px]">{item.card.info.description}</div>
                  </div>
                  <div className=" px-8 w-2/12 " >
                      <img alt="img"  className=" w-auto border border-solid border-black  rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+item.card.info.imageId}/>
                      <button className="font-bold rounded-lg p-2 m-2 ml-4 bg-slate-200">Add+</button>
                  </div>
              </div>
          ))}
          </div>:<div></div>}
           
        </div>
    )
}

export default MenuCatogories;
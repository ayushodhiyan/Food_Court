import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";


const ResMenu=()=>{
    const[resmenu,setResMenu]=useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);


    const fetchMenu= async ()=>{
        const data=await fetch(
            "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65200&lng=77.16630&restaurantId=523200&isMenuUx4=true&submitAction=ENTER"
            );
        const json= await data.json();
        console.log(json);
        setResMenu(json);
        
    };
    if(resmenu===null)return <Shimmer/>;
   

    const {name,cuisines,costForTwoMessage,avgRating} =
    resmenu?.data?.cards[2]?.card?.card?.info;

    const{itemCards}=
    resmenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


    return(
        <div>
            <h2>{name}</h2>
            <h4>{cuisines.join(" ,")}</h4>
            <h4>{costForTwoMessage}--{avgRating}</h4>
            <div>
                <h3>===MENU===</h3>
            <ul><h4>
            {itemCards.map((res)=>(
                <li>{res.card.info.name}--Rs {res.card.info.defaultPrice/100 }</li>
            ))}
                
                </h4>
                </ul>
            </div>
            
            
        </div>
    );
};

export default ResMenu;
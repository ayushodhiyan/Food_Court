import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const ResMenu=()=>{
    const[resmenu,setResMenu]=useState(null);
    const{resId}= useParams();
    useEffect(()=>{
        fetchMenu();
    },[]);


    const fetchMenu= async ()=>{
        const data=await fetch(
            "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65200&lng=77.16630&restaurantId="+resId+"&isMenuUx4=true&submitAction=ENTER"
            );
        const json= await data.json();
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
            <h4>{costForTwoMessage}</h4>
            <h4>Rating--{avgRating}</h4>
            <div>
                <h3>===MENU===</h3>
            <ul>
            {itemCards.map((item)=>(
                <li key={item.card.info.id}
                    >{item.card.info.name}--Rs {item.card.info.defaultPrice/100||item.card.info.price/100 }</li>
            ))}
            </ul>
            </div>
            
            
        </div>
    );

  }


    


export default ResMenu;
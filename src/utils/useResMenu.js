import { useState,useEffect} from "react";

const useResMenu= (resId)=>{
    const[resmenu,setResMenu]=useState(null);
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
    
    return resmenu;

};

export default useResMenu;


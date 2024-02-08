import ResCard from "./ResCard";
import { useState ,useEffect} from "react";
import Shimmer from "./Shimmer";

const Body=()=>{
  const[resList1,setfilterlist]= useState([]);

  useEffect(()=>{
    fetchedData();
  },[]);

  const fetchedData=async()=>{
    const data =await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=28.65200&lng=77.16630"
      );
      const json= await data.json();
        
        setfilterlist(
          json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
  };

  if(resList1.length===0){
    return<Shimmer/>;
  }

    return(
      <div className="body">
          <button className="filter-button" onClick={() => {
            const filteredlist=resList1.filter((res)=>res.info.avgRating > 4);
            setfilterlist(filteredlist);
           
          }}>
            Top Rated Restaurant
          </button>
      
        <div className="res-cont">
          {resList1.map((rest)=>(
            <ResCard key={rest.info.id} resdata={rest}/>
          ))}
        </div>
      </div>
    );
  };

  export default Body;
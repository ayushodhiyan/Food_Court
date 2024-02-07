import ResCard from "./ResCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body=()=>{
  const[resList1,setfilterlist]= useState(resList);
    return(
      <div className="body">
          <button className="filter-button" onClick={()=>{
            const filteredlist=resList.filter((res)=>res.info.avgRating > 4);
            setfilterlist(filteredlist);
            console.log(filteredlist);
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
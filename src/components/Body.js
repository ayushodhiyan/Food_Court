import ResCard ,{withlabel}from "./ResCard";
import { useState ,useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body=()=>{
  const[resList1,setfilterlist]= useState([]);
  const[searchText,setsearchText]= useState([]);
  const[searchedlist,setsearchedlist]=useState([]);

  useEffect(()=>{
    fetchedData();
  },[]);

  const PromotedRescCard=withlabel(ResCard);

  const fetchedData=async()=>{
    const data =await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=28.65200&lng=77.16630"
      );
      const json= await data.json();
      
        
        setfilterlist(
          json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
          setsearchedlist(
            json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants
          );
  };

  if(resList1.length===0){
    return<Shimmer/>;
  }

    return(
      <div className="body">
        <div className=" flex justify-between items-center pb-2 pl-4 " >
          <div className="py-2  ">
            <input type="text" className=" pl-4 border-2" value={searchText}
            onChange={(e)=>{
              setsearchText(e.target.value);
            }}
            />
            
            <button className="px-4 py-2 mx-2 bg-slate-200 shadow-lg rounded-lg font-bold cursor-pointer hover:bg-slate-400" onClick={()=>{
              
              const searchedlistofres=resList1.filter(
                (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setsearchedlist(searchedlistofres);
            }}>
              Search
            </button>

          </div>
          <div className="py-2  ">
          <button className="px-2 py-2 mx-2 bg-slate-200 shadow-lg rounded-lg font-bold cursor-pointer hover:bg-slate-400" onClick={() => {
            const filteredlist=resList1.filter((res)=>res.info.avgRating > 4);
            setsearchedlist(filteredlist);
           
          }}>
            Top Rated Restaurant
          </button>
          </div>
        
        </div>
      
        <div className="flex flex-wrap pl-16">
          {searchedlist.map((rest)=>(
            <Link key={rest.info.id} to={"/restaurants/"+rest.info.id}>
              {rest.info.promoted?<PromotedRescCard resdata={rest} />:<ResCard resdata={rest}/>}
            </Link>
          ))}
        </div>
      </div>
    );
  };

  export default Body;
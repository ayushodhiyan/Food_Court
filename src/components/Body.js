import ResCard from "./ResCard";
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
        <div className="filter" >
          <div className="search">
            <input type="text" className="search-box" value={searchText}
            onChange={(e)=>{
              setsearchText(e.target.value);
            }}
            />
            <button className="search-btn" onClick={()=>{
              
              const searchedlistofres=resList1.filter(
                (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setsearchedlist(searchedlistofres);
            }}>
              Search
            </button>

          </div>
        <button className="filter-button" onClick={() => {
            const filteredlist=resList1.filter((res)=>res.info.avgRating > 4);
            setsearchedlist(filteredlist);
           
          }}>
            Top Rated Restaurant
          </button>
        </div>
      
        <div className="res-cont">
          {searchedlist.map((rest)=>(
            <Link key={rest.info.id} to={"/restaurants/"+rest.info.id}><ResCard resdata={rest}/></Link>
          ))}
        </div>
      </div>
    );
  };

  export default Body;
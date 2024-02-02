import ResCard from "./ResCard";
import resList from "../utils/mockData";

const Body=()=>{
    return(
      <div className="body">
        <div className="search">Search</div>
        <div className="res-cont">
          {resList.map((rest)=>(
            <ResCard key={rest.info.id} resdata={rest}/>
          ))}
        </div>
      </div>
    );
  };

  export default Body;
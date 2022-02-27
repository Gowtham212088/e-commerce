import { data } from "./Data";
import CardDetails from "./CardDetails";

export default  function DataMap (){
return(
    <div className="datamap">
        <div className="datamap1">
        {data.map((element,index)=>(
            <CardDetails
            id = {index}
            {...element}
            />
))}
</div>
    </div>
)
}
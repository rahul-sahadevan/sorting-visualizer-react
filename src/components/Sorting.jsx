import React,{useState} from "react";
import { sort_array } from "../redux/actions/actionFunction";
import { useDispatch,useSelector } from "react-redux";

function Sorting(){
    const [array,setArray] = useState('');
    const[size,setSize] = useState(0);
    const [tech,setTech] = useState('')

    const obj = useSelector(state => state)
    const dispatch = useDispatch();

    // console.log(obj)


    function handleObject(){
        dispatch(sort_array({
            tech:tech,
            array:array.split(" "),
            size:size
        }))

    }


    return (
        <div className="sorting-div">
            <h1>Sorgting Visualizer</h1>
            <br></br>
            <br></br>
            <div className="input-div">

                <select onClick={(e)=>setTech(e.target.value)} className="sorting-type">
                    <option>
                        Bubble Sort
                    </option>
                    <option>
                        Selection Sort
                    </option>
                    <option>
                        Insertion Sort
                    </option>
                </select>
                <input type="text" onChange={(e)=>setArray(e.target.value)}  placeholder="Enter Array" required></input>
                <input type="number" onChange={(e)=>setSize(e.target.value)}  placeholder="Enter Size" required></input>
            </div>
            <br></br>
            <br></br>
            <button className="array-display-btn btn" onClick={()=>handleObject()}>Display Array</button>
        </div>
    )
}
export default Sorting
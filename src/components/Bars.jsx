import { useDispatch,useSelector } from "react-redux";

function Bars(){
    const obj = useSelector(state => state);
    console.log(obj)
    const {sortingType,array,size} = obj;
    let n = Number(size);

    let temp = [];
    for(let i =0;i<array.length;i++){
        if(Number(array[i]) > 10){
            alert('Enter Number less than or equal to 10')
        }
        else{

            temp.push(Number(array[i]))
        }
    }
    function handleSort(){
        const x  = document.querySelectorAll('.bars');
       
    }
  
    console.log(temp)
   


    return (
        <div className="main-bar-div">
            <div className="bars-div">
               {
                temp.length === Number(size) ? (
                temp.map((bar)=>(
                    <div className="bars" style={{height: 2 * bar * 10 }}>{bar}</div>
                ))):
                (
                    <h3>Size Should be Equal</h3>
                )
               }
            </div>
            <br></br>
            <br></br>
            <button className="btn" onClick={handleSort}>Sort Array</button>

        </div>
    )

}
export default Bars
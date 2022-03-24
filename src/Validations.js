import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
// import Validation from "./Validation";
const Validations =()=>{
const [data,setData]=useState({
    selectedOne:'',
    comment: '',
   
   
})
const [errors,setErrors]=useState({});
let navigate = useNavigate();
const{comment,selectedOne}=data;



    const handleChange =(e)=>{
        // setData({...data,[e.target.name]:[e.target.value]})
        setData((prev)=>({...prev,[e.target.name]:[e.target.value]}))
    }


    useEffect(()=>{
        const forms =JSON.parse(localStorage.getItem("user"))
        setData((prev)=>({...prev,...forms}))
    },[]);

    useEffect(()=>{

        localStorage.setItem("user",JSON.stringify(data));
    },[data]);

    const Validation=(values)=>{
        let errors ={} 
    
        if(!values.selectedOne){
            errors.selectedOne ="Select the reason"
        }
        
        if(!values.comment){
            errors.comment ="Enter your comment"
        }else{
            navigate("/main");
        }
      
        return errors;
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(selectedOne,comment)
       setErrors(Validation(data))
    
     
    }


return(
        <div className="container">
            <form >
{/*                
            <p>{selectedOne }</p> */}
                <select name="selectedOne"  value={selectedOne}  onChange={handleChange} className="mt-3">
                <option>---Select anyone---</option>
                    <option value="Color is not Good">Color is not Good</option>
                    <option value="Size is Small">Size is Small</option>
                    <option value='Size is too big'>Size is too big</option>
                    <option value="Product is Damaged">Product is Damaged</option>
                    
                    <option value="item arrived too late">item arrived too late</option>
                </select>
                {<p className="error text-danger">{errors.selectedOne}</p>}<br/>
                </form>
               <form>
                <input  disabled={!selectedOne}  type="text" name="comment" value={comment} placeholder="Enter the comment" onChange={handleChange} className=" mt-3" />
            { selectedOne && !comment? <p  className="error text-danger">{errors.comment}</p>:null} <br/>
            {/* <p>{comment }</p> */}
                    <input type="submit"  className="btn-primary rounded-3 mt-3"  onClick={handleSubmit} />
                   
                    </form>
          
           
        </div>
)


}
export default Validations;
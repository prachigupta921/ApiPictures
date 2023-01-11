import React,{useEffect, useState} from "react";
import { useParams,useNavigate } from "react-router-dom";

const ShowData=()=>{

    const [show, setshow]=useState({})
    const {id}=useParams();

    let navigate = useNavigate();
    const handChange=()=>{
        let path = '/';
        navigate(path);
    }
 
    useEffect(()=>{
		fetchfun();
	},[])

    const fetchfun=()=>{
		fetch("https://reqres.in/api/users")
		.then((res)=>{
			if(res.ok){
				return res.json();
			}else {
				console.log("res error");
			}
		})
		.then((data)=>{
            const newproduct=data.data.find((item)=>item.id=== parseInt(id));
            //console.log(newproduct);
            setshow(newproduct)
		})
		.catch((err)=>console.log(err));
	}
    
    return(
        <div style={{marginTop:"10%"}}>
         <button style={{marginBottom:"5%", width:"80px",height:"30px"}}  onClick={handChange}>go back</button>
        <div style={{border:"2px solid green", width:"30%",alignItems:"auto", marginLeft:"35%"}}>
        <img style={{width:"80px",height:"80px", padding:"20px 40px 20px 40px"}} src={show.avatar} alt="" />
        <h6>{show.first_name} {show.last_name}</h6>
        <h5>{show.email}</h5>
        </div>
        </div>
    )
}
export default ShowData
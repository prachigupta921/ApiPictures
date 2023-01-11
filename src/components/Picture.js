import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";


const Picture=()=>{

    const [product, setproduct]=useState([]);

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
            console.log(data);
			setproduct(data.data);
		})
		.catch((err)=>console.log(err));
	}
console.log(product,"p");
    return(
        <div style={{display:"flex",justifyContent:"space-between",padding:"40px 80px 40px 80px", marginTop:"10%"}}>
        {
            product.map((item)=>{
                const {id}=item
                return(
                    <div key={id}>
                    <Link to={`/showdata/${id}`}>
                        <img style={{width:"80px",height:"80px"}} src={item.avatar} alt="" /></Link>
                    </div>
                )
            })
        }
        </div>
    )
}
export default Picture
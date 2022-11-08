import React from 'react';
import { useState , useEffect } from "react";

const ServicesItem = () => {
    const [items , setItems] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/home')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])
    return (
        <div>
            {
                
            }
        </div>
    );
};

export default ServicesItem;
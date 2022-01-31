import React from "react";

import './main.css'
import CarouselComp from "../../components/carousel/CarouselComp";
//<ProductCard name={prod.name} key={index} precio={prod.precio}></ProductCard>
const Main = ()=>{
    return(
            
            <div className="row maincustom mb-0">
                
                <CarouselComp></CarouselComp>
            </div>
        
       
       )
}

export default Main
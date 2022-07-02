import React from "react";
import "./upperPage.css";
import image1 from "./images/image1.png";
import { Button1 } from "./button1";

export const UpperPage =()=>{

  
    return(

        <div className="UpperPage-Container">

            <div className="UpperPage">

                <div className="UpperPage-left">
                    <h1>Discover Good Karma</h1>
                    <p>Lorazepam may increase the risk of serious or life-threatening breathing problems, </p>
                    <Button1 label="Buy Now"/>
                    <button className="seeMore">See more...</button>
                </div>

                <div className="UpperPage-right">
                
                <img src={image1} alt="image1"/>


                </div>
                
            </div>

        </div>
        
    );


}
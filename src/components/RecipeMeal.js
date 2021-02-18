import React, { Fragment, useEffect, useState } from "react";
import { Client } from "../utils/Client";
import { useParams } from "react-router-dom";

const RecipeMeal = () => {
  // const {id}= useParams()
  const RecipeId = Number(useParams().mealId);
  const [receipe, setReceipe] = useState();

  useEffect(() => {
    Client.getEntries()
      .then((res) => {

        let RecipeMeal = res.items.find((meal)=>{
            return(
                meal.fields.id === RecipeId
            )
        }
            )
        console.log(RecipeMeal);
        setReceipe(RecipeMeal);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Fragment>
     {
         receipe &&
         <div className="container mt-3">
         <div className="row">
           <div className="col-md-8">
             <div className="card">
               <div className="card-header">
                 <p>{receipe.fields.receipe}</p>
               </div>
               <div className="card-body">
                 <img src={receipe.fields.image.fields.file.url} class="card-img-top" alt="..." height="250" />
               </div>
             </div>
           </div>
 
           <div className="col-md-4">
             <div className="card">
               <div className="card-body">
                 <div className="card-header">
                   <p>prepare</p>
                 </div>
                 <ul>
                   <li>Cook: 30min</li>
                   <li>prep: 33 min</li>
                   <li>serving : 3 p</li>
                 </ul>
               </div>
             </div>
           </div>
         </div>
       </div>
     }
    </Fragment>
  );
};

export default RecipeMeal;

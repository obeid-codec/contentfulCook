import React, { Fragment, useEffect, useState } from "react";
import { Client } from "../utils/Client";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    Client.getEntries()
      .then((res) => {
        console.log(res.items);
        setMeals(res.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  return (
    <Fragment>
      <div className="container mt-3">
        <div className="row">
          {meals.map((meal) => {
            return (
              <Fragment key={meal.fields.id}>
                <div className="col-md-4">
                  <div className="card">
                    <img
                      src={meal.fields.image.fields.file.url}
                      className="card-img-top"
                      alt="..."
                      height="200"
                      width="120"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{meal.fields.receipe}</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#!" className="btn btn-primary">
                        Button
                      </a>
                    </div>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Meals;

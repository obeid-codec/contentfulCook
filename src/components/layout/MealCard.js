import React from 'react'
import { Link } from 'react-router-dom'

const MealCard = ({mealpic , title , describe ,mealtype, mealid}) => {
    return (
        <div className="card">
        <img
          src={mealpic}
          className="card-img-top"
          alt="..."
          height='250'
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {describe}
          </p>
          <Link to={`/meals/${mealtype}/${mealid}`} className="btn btn-primary">
            Button
          </Link>
        </div>
      </div>
    )
}

export default MealCard

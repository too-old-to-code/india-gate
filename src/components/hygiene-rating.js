import './hygiene-rating.scss'
import React from 'react'
import classnames from 'classnames'
import { useStaticQuery, graphql } from 'gatsby'


const ratingDescriptions = [
  'Urgent improvement necessary',
  'Major improvement necessary',
  'Improvement necessary',
  'Generally satisfactory',
  'Good',
  'Very good'
]

const HygieneRating = () => {
  let {foodHygiene} = useStaticQuery(graphql`
    query hygiene {
      foodHygiene {
        Scores {
          Hygiene
        }
      }
    }
  `)
  const rating = foodHygiene.Scores.Hygiene
  if (Number(rating) < 4) return null
  return (
    <div className="food-hygiene-rating">
      <div className="heading">FOOD HYGIENE RATING</div>
      <div className="ratings">
        <span className={classnames("rating-number", {'active-rating': rating === '0'})} >0</span>
        <span className={classnames("rating-number", {'active-rating': rating === '1'})} >1</span>
        <span className={classnames("rating-number", {'active-rating': rating === '2'})} >2</span>
        <span className={classnames("rating-number", {'active-rating': rating === '3'})} >3</span>
        <span className={classnames("rating-number", {'active-rating': rating === '4'})} >4</span>
        <span className={classnames("rating-number", {'active-rating': rating === '5'})} >5</span>
      </div>
      <div className="rating-text">
        <span className="rating-description">{ratingDescriptions[rating]}</span>
      </div>
    </div>
  )
}

export default HygieneRating
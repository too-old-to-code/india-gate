import './food-menu.scss'
import React from 'react'
import classnames from 'classnames'
import { useStaticQuery, graphql } from 'gatsby'


const MenuSubsection = ({node}) => {
  return (
    <div key={node.id}>
      <h4>{node.heading.value}</h4>
      {
        node.items.value.map((item, index) => {
          return (
            <MenuItem item={item} key={item.id} index={index}/>
          )
        })
      }
    </div>
  )
}

const MenuItem = (props) => {
  const { name, description, priceIn, priceOut, id } = props.item
  return (
    <div
      className={classnames('menu-item', { even: props.index % 2 === 0 })}
    >
      <div>
        <h6 className="item-name">{name && name.value}</h6>
        <div className="item-description">{description && description.value}</div>
      </div>
      <div className="item-price">{priceIn && priceIn.value} / {priceOut && priceOut.value}</div>
    </div>
  )
}

const FoodMenu = () => {
  let { allCockpitMenu } = useStaticQuery(graphql`
    query FoodQuery {
      allCockpitMenu {
        edges {
          node {
            id
            heading {
              value
            }
            items {
              value {
                id
                name {
                  value
                }
                description {
                  value
                }
                priceIn {
                  value
                }
                priceOut {
                  value
                }
                notAvailable {
                  value
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className="food-menu">
    {
      allCockpitMenu.edges.map((item, index) => {
        return <MenuSubsection node={item.node} key={item.node.id}/>
      })
    }
    </div>
  )
}



export default FoodMenu
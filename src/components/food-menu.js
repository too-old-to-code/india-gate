import './food-menu.scss'
import React, {useState} from 'react'
import classnames from 'classnames'
import { useStaticQuery, graphql } from 'gatsby'
import AnimateHeight from 'react-animate-height';


const MenuSubsection = ({node}) => {
  const [open, toggleOpen] = useState(false)

  return (
    <div key={node.id}
      style={{
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <h4
        onClick={() => toggleOpen(!open)}
        style={{
          display: 'inline-block',
          padding: '15px 0px',
          background: '#f8c40e',
          color: 'rgb(253, 247, 229)',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          boxShadow: '1px 1px 3px black',
          width: '100%',
          margin: '3px 0',
          textShadow: '0px 1px 2px black',
          fontSize: '1.1em',
          position: 'relative'
        }}
      >
        {node.heading.value}
      </h4>
      {
        node.items.value.map((item, index) => {
          return (
            <AnimateHeight
              duration={ 300 }
              height={ open ? 'auto' : 0} // see props documentation bellow
              key={item.id}
            >
              <MenuItem item={item}  index={index}/>
            </AnimateHeight>
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
      <div className="item-price">
        {priceIn && priceIn.value}
        {priceIn && priceIn.value && priceOut && priceOut.value ? ' / ' : ''}
        {priceOut && priceOut.value}
      </div>
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
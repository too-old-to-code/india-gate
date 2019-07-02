import './notifications.scss'
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import format from 'date-fns/format'
import isWithinRange from 'date-fns/is_within_range'

const Notifications = () => {
  const data = useStaticQuery(graphql`
    query GetNotifications {
      allCockpitNotifications {
        nodes {
          date_start {
            value(formatString: "MM/DD/YYYY")
          }
          date_end{
            value(formatString: "MM/DD/YYYY")
          }
          message {
            value
          }
        }
      }
    }
  `)

  const activeNotices = data.allCockpitNotifications.nodes.filter((note) =>
    isWithinRange(
      new Date(format(Date.now(), 'MM/DD/YYYY')),
      new Date(note.date_start.value),
      new Date(note.date_end.value)
    )
  )

  return (
    <div>
      {
        activeNotices.map((note) => {
          return (
            <div
              className="notification"
              dangerouslySetInnerHTML={{__html: note.message.value}}
              key={`${note.date_start.value}${note.date_end.value}`}
            />
          )
        })
      }
    </div>
  )
}

export default Notifications
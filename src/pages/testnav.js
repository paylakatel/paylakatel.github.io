import React from "react"

export default ({ data }) => {
  console.log(data)
  return <div><tbody>
    {data.allDirectory.edges.map(({ node }, index) =>
        <tr key={index}>
        <td>
            {node.name}
        </td>
        </tr>
  )}
    </tbody></div>
}

export const navQuery = graphql`
    query navQuery1 { 
        allDirectory {
        edges {
            node {
            name
            }
          }
        }
    }
`
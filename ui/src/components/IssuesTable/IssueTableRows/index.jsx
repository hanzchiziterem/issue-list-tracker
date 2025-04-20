import React from 'react'
import IssueTableRow from './IssueTableRow';

const IssueTableRows = ({issuesList}) => {
  return (
    <tr 
    scope="row"
    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
  >
    <IssueTableRow issuesList={issuesList} />
  </tr>
  )
}

export default IssueTableRows;
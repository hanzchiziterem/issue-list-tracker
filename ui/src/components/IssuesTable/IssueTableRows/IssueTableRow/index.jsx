import React from 'react'

const IssueTableRow = ({issuesList}) => {
  const tdClassName =`px-6 py-4 text-black`;
  return (
    <>
    <td className={tdClassName}>{issuesList.id}</td>
    <td className={tdClassName}>{issuesList.title}</td>
    <td className={tdClassName}>{issuesList.status}</td>
    <td className={tdClassName}>{issuesList.effort}</td>
    <td className={tdClassName}>{issuesList.createdAt.toDateString()}</td>
    <td className={tdClassName}>{issuesList.completedAt ? issuesList.completedAt.toDateString() : ''}</td>
    <td className={tdClassName}>{issuesList.owner}</td>

    </>
  )
}

export default IssueTableRow
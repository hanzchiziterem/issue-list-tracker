import React, { useState } from "react";
import IssuesTable from "../../components/IssuesTable";
import AddIssues from "../../components/AddIssues";

const IssueList = () => {
  const IssueData = [
    {
      id: 1,
      title: "Error in console when clicking Add",
      status: "Open",
      effort: 5,
      createdAt: new Date("2016-08-15"),
      completedAt: undefined,
      owner: "Ravan",
    },
    {
      id: 2,
      title: "Missing bottom border on panel",
      status: "Assigned",
      effort: 14,
      createdAt: new Date("2016-08-16"),
      completedAt: new Date("2016-08-30"),
      owner: "Eddie",
    }
  ];

  const [issuesList, setIssueList] = useState(IssueData)

  return (
    <div>
      <IssuesTable issuesList={issuesList} />
      <AddIssues />
    </div>
  );
};

export default IssueList;

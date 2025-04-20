import IssueTableColumns from "./IssueTableColumns";
import IssueTableRows from "./IssueTableRows";

const IssuesTable = ({ issuesList }) => {
  const displayIssues = issuesList.map((issues) => (
    <IssueTableRows key={issues.id} issuesList={issues} />
  ));
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <IssueTableColumns />
        <tbody>{displayIssues}</tbody>
      </table>
    </div>
  );
};

export default IssuesTable;

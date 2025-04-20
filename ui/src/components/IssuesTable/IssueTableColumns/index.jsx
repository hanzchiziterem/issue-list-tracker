const IssueTableColumns = () => {
    const issueTableColumns = [
      "Id",
      "Title",
      "Status",
      "Effort",
      "Created At",
      "Completed At",
      "Owner",
    ];
    return (
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          {issueTableColumns.map((column, index) => (
            <th key={index} scope="col" className="px-6 py-3">
              {column}
            </th>
          ))}
        </tr>
      </thead>
    );
  };

  export default IssueTableColumns;
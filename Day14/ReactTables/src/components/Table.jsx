function Table({ data, config, keyFn }) {
  const renderedHeaders = config.map((column) => {
    return (
      <th key={column.label} className="p-3 text-left">
        {column.label}
      </th>
    );
  });

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (
        <td key={column.label} className="p-3">
          {column.render(rowData)}
        </td>
      );
    });

    return (
      <tr
        key={keyFn(rowData)}
        className="border-b hover:bg-gray-50 transition"
      >
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="w-full border border-gray-300 bg-white rounded">
      <thead className="bg-gray-200">
        <tr>{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
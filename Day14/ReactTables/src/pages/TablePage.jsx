import Table from "../components/Table";

function TablePage() {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
  ];

  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => (
        <div className={`w-6 h-6 rounded ${fruit.color}`} />
      ),
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
    },
  ];

  const keyFn = (fruit) => fruit.name;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Table Page</h1>

      <div className="bg-white p-4 rounded shadow">
        <Table data={data} config={config} keyFn={keyFn} />
      </div>
    </div>
  );
}

export default TablePage;
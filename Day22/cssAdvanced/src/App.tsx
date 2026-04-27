import Card from "./components/Card";

function App() {
  return (
    <div className="container">
      <h1>Advanced CSS Demo</h1>

      {/* Cards */}
      <Card title="Normal Card" />
      <Card title="Error Card" error />

      {/* List */}
      <ul>
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
      </ul>

      {/* Button */}
      <button className="btn">Hover Me</button>
    </div>
  );
}

export default App;
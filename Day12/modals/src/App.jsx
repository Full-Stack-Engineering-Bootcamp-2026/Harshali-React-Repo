import React, { useState } from 'react';
import Modal from './components/Modal';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>My App</h1>

      <button onClick={() => setShow(true)}>
        Open Popup
      </button>

      {show && <Modal onClose={() => setShow(false)} />}
    </div>
  );
}

export default App;
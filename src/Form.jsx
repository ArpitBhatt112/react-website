import { useState } from 'react';
import './index.css'

function MyForm() {
  const [name, setName] = useState("");

  return (
    <div>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </div>
  )
}

export default MyForm;
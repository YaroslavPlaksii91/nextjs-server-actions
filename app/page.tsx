'use client';

import { useState } from 'react';
import { submitForm } from './services';

import './page.css';

export default function Home() {
  const [response, setResponse] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);

    const result = await submitForm(formData);
    
    if (result.success) {
      setResponse(result.message);
    }
  };

  return (
    <div className="container">
      <h1>Simple Next.js Server Actions Example</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required />
        </div>

        <button type="submit">Submit</button>
      </form>

      {response && <p className="response">{response}</p>}
    </div>
  );
}

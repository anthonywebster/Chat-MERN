import React, { useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { link } from 'fs';

function App() {
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState('');
  const messageForm = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();
    setMessageList([...messageList, message]);
    setMessage('');
  }

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      console.log(messageForm);
      // messageForm.current.submit();
      // messageForm.current.onSubmit();
    }
  } 

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <div className="main">
        <aside className="contacts">
          <h1>contacts</h1>
        </aside>

        <div className="content">
          <div className="content--messages">
            <ul>
              {
                messageList.map((m,k) => {
                  return <li key={k}>{m}</li>
                })
              }
            </ul>
          </div>

          <div className="content--message">
            <form onSubmit={onSubmit} ref={messageForm}>
              <textarea 
                className="content--message--area" 
                onChange={e => setMessage(e.target.value)} 
                onKeyPress={handleEnter}
                value={message}
                >
                </textarea>
              <button type="submit" className="content--message--send">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

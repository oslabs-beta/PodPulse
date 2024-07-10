import React from 'react';
import { useState, useEffect } from 'react';

export default function RestartedBy(props) {
  let name = '';
  let logId;

  function handleChange(e) {
   e.preventDefault();
   name = e.target.value;
   logId = e.target.key;
  }

  useEffect( () => {
    fetch('/pods/restarted_by', {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        restart_log_db_id: logId,
      })
    });
  }
  , []);

  const names = props.restartLogs.map(log => {
    if(log.restart_person) {
      return <li key={props.key}>{log.restart_person}</li>
    } else {
      return (
        <form>
          <input type='text' placeholder='Name' value='' onChange={handleChange} key={log.restart_log_db_id}></input>
        </form>
      );
    }
  });

  return (
    <ul>
      {names}
    </ul>
  );
}

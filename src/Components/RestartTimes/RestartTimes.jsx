import React from 'react'

export default function RestartTimes(props) {

  const restartTimes = props.restartLogs.map(log => <li key={props.key}>{log.log_time}</li>);

  return (
    <ul>
      {restartTimes}
    </ul>
  );
}

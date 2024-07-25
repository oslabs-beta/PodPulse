import React from 'react';
import { nanoid } from 'nanoid';

export default function RestartTimes(props) {
  const restartTimes = props.restartLogs.map((log) => {
    const restart_time = new Date(log.LOG_TIME);

    const year = restart_time.getFullYear();
    const month = ('0' + (restart_time.getMonth() + 1)).slice(-2);
    const day = ('0' + restart_time.getDate()).slice(-2);
    const hours = ('0' + restart_time.getHours()).slice(-2);
    const minutes = ('0' + restart_time.getMinutes()).slice(-2);
    const seconds = ('0' + restart_time.getSeconds()).slice(-2);

    const humanReadableFormat = `${month}-${day}-${year} @ ${hours}:${minutes}:${seconds}`;

    return <li key={nanoid()}>{humanReadableFormat}</li>;
  });

  return <ul>{restartTimes}</ul>;
}

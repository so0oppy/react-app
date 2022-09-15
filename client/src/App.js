import React, {useEffect, useState} from 'react';

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, []) //대괄호가 있으면 한 번만 실행하고 더 이상 실행하지 않음

  return (
    <div>
      
      {(typeof backendData.users === 'undefined') ? (   //아직 users나 fetch할 api가 없는 경우
        <p>Loading ...</p>
      ): (     //있을 경우(else)
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}

    </div>
  );
}

export default App;

import React from 'react';
import { index, create, destroy } from './api'; // export した `create` 関数をインポート

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>Hello World</h1>
        <button onClick={() => index().then(json => console.log(json))}> {/* index 関数が返した json をコンソールに表示する */}
          GET /todos
        </button>
        <button onClick={() => create('first todo', 'do it').then(json => console.log(json))}>
          POST /todos
        </button>
        <button
          onClick={() => destroy('3104b443-12b3-4345-b7c2-84ad546ee35f').then(json => console.log(json))}
        >
          DELETE /todos
        </button>
      </div>
    );
  }
}

export default App;

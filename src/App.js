import React from 'react';
import TodoItem from './components/TodoItem';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h3>Todo List</h3>
        {/* Props を使うことで外から値が渡せる（関数の引数に似ている） */}
        <TodoItem
          title="Todo1のタイトル"
          text="Todo1のテキスト"
          created_at="Todo1の作成日時"
        />
        <TodoItem
          title="Todo2のタイトル"
          text="Todo2のテキスト"
          created_at="Todo2の作成日時"
        />
      </div>
    );
  }
}

export default App;

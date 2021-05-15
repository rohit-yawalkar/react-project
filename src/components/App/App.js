import "./App.css";
import Todo from '../Todo/Todo';

function App() {
  return (
    <div className="App">
      <h1>My Todos!</h1>
      <Todo title='Learn React'/> {/* custom html element */}
      <Todo title='Learn Python'/>
      <Todo title='Learn R'/>
      <Todo title='Learn Java' />
    </div>
  );
}

export default App;

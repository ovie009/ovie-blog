import './App.css';

function App() {
  const title = 'My first React Blog';
  const name = 'Ovie';
  const age = 23;
  const person = {
    name: 'Esere',
    age: 14
  };
  const link = 'google.com';
  let fruits = ['orange', 'mango', 'cherry'];
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>{name}</p>
        <p>{age}</p>
        <p>{person.name}</p>
        <p>{fruits[0]}</p>
        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;

import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";


const tasks = [
  { id: 1, content: "przejść na reacta", done: false },
  { id: 2, content: "zdjeść obiad", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <body className="body">

      <header className="header">
        <h1>Lista zadań</h1>
      </header>
      <section className="section">
        <h2 className="section__header">Dodaj nowe zadanie</h2>
        <Form />
      </section>

      <section className="section">
        <div className="section__header">
          <h3 className="section__title">Lista zadań</h3>
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
        </div>
        <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
      </section>
    </body>
  );
}

export default App;

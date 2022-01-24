import Title from './components/Title/Title';
import Anais from './components/Anais/Anais';
import Arnaud from './components/Arnaud/Arnaud';
import Claire from './components/Claire/Claire';
import Davy from './components/Davy/Davy';
import Esteban from './components/Esteban/Esteban';
import Francesco from './components/Francesco/Francesco';
import Franck from './components/Franck/Franck';
import Lucille from './components/Lucille/Lucille';
import Paul from './components/Paul/Paul';
import Ranto from './components/Ranto/Ranto';
import Rodolphe from './components/Rodolphe/Rodolphe';
import Salim from './components/Salim/Salim';
import Sandra from './components/Sandra/Sandra';
import Stanislas from './components/Stanislas/Stanislas';
import Vincent from './components/Vincent/Vincent';
import Footer from './components/Footer/Footer';

import './App.css';
import Lemurien from './components/Lemurien/Lemurien';

function App() {
  const students = [
    <Anais />,
    <Arnaud />,
    <Claire/>,
    <Davy />,
    <Esteban />,
    <Francesco />,
    <Franck />,
    <Lucille />,
    <Paul />,
    <Ranto />,
    <Rodolphe />,
    <Salim />,
    <Sandra />,
    <Stanislas />,
    <Vincent />,
  ];

  return (
    <div className="App">
      <Title />
      {students.map((student, i) => {
        const StudentName = student;

        return (
          <section className="students-messages" key={i}>
            {student}
          </section>
        );
      })}
      <Lemurien />
      <Footer />
    </div>
  );
}

export default App;

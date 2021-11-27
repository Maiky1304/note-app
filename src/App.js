import './App.css';
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import Notes from "./components/Notes";

function App() {
  return (
    <div className="app">
        <div>
            <Header />
            <Searchbar />
            <Notes />
        </div>
    </div>
  );
}

export default App;

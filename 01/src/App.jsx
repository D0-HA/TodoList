import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <div className="App">
        <div className="wrapper">
          <Header />
          <main className="app-main">
            <Main />
          </main>
          <div className="button-container">
            <button type="button" className="button-type_add">
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

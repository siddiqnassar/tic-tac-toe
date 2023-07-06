import GameBoard from "./components/GameBoard/GameBoard";
import "./css/App.scss";
import Information from "./components/Information/Information";

function App() {
  return (
    <div className="TicTokMainContainer">
      <div className="titleHeader">
        TIC TAC TOE
      </div>
      <GameBoard />
      <Information />
    </div>
  );
}

export default App;

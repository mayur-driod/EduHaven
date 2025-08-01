import { Route, Routes } from "react-router-dom";
import GameRoom from "../components/gameRoomComponents/GameRoom";
import TicTacToe from "../components/games/tic-tac-toe/TicTacToe.jsx";
import Snake from "../components/games/SnakeGame.jsx";
import TypingGame from "../components/games/TypingGame";
import SpaceType from "../components/games/SpaceType";

const GameRoutes = () => {
  return (
    <Routes>
      <Route index element={<GameRoom />} />
      <Route path="tic-tac-toe" element={<TicTacToe />} />
      <Route path="snake" element={<Snake />} />
      <Route path="typing-game" element={<TypingGame />} />
      <Route path="space-type-2" element={<SpaceType />} />
    </Routes>
  );
};

export default GameRoutes;

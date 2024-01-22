import './App.css';
import styled from 'styled-components';
import { Routes, Route} from 'react-router-dom';
import { TopBar } from './components/TopBar';

import { Goal } from './pages/Goal';
import { MeasureYourself } from './pages/MeasureYourself';
import { DestructiveBehaviors } from './pages/DestructiveBehaviors';
import { PhysicalExercise } from './pages/PhysicalExercise';

const AppWrapper = styled.div`
width: 100%;
height: 100vh;
`;

function App() {

  return (
    <AppWrapper className="App">
      <TopBar />

      <Routes>
        <Route path="/" element={<Goal />} />
        <Route path="/measure-yourself" element={<MeasureYourself />} />
        <Route
          path="/destructive-behaviors"
          element={<DestructiveBehaviors />}
        />
        <Route path="/physical-exercise" element={<PhysicalExercise />} />
      </Routes>

    </AppWrapper>
  );
}

export default App;

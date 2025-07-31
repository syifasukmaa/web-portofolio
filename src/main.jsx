import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import ProjectDetail from './components/organisms/ProjectDetail.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route
        path='/'
        element={<App />}
      />
      <Route
        path='/projects/:id'
        element={<ProjectDetail />}
      />
    </Routes>
  </BrowserRouter>,
);

import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import ProjectDetail from './components/organisms/ProjectDetail.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <LanguageProvider>
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
    </BrowserRouter>
  </LanguageProvider>,
);


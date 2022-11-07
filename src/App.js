import './App.css';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Routes/Routes';

function App() {
  return (
    <div>
      <Toaster/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

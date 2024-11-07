import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Main from './pages/main.jsx'
import App from './App.jsx';
import Home from './pages/Home';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DonationHistory from './pages/DonationHistory';
import Success from './pages/Success';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NoMatch />,
    children: [
      {
        index: true,
        element: <Main />
      },{
        path: '/foodbanks',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/donationhistory',
        element: <DonationHistory />
      }, {
        path: '/foodbanks/:id',
        element: <Detail />
      }, {
        path: '/success',
        element: <Success />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

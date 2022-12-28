import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import { store } from './redux/store';
import router from './router/Router';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);

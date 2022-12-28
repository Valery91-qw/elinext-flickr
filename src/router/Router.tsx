import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import ImagesContainer from '../view/components/imagesContainer/ImagesContainer';
import routerEnum from './router-enum';
import App from '../view/App';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={routerEnum.DEFAULT} element={<App />}>
      <Route path={routerEnum.SEARCH} element={<ImagesContainer />} />
      <Route path={routerEnum.BOOKMARKS} element={<ImagesContainer />} />
    </Route>,
  ),
);

export default router;

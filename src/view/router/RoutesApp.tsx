import { Navigate, Route, Routes } from 'react-router-dom'
import ImagesContainer from '../components/imagesContainer/ImagesContainer'
import routerEnum from './routerEnum'

export default function RoutesApp() {
  return (
    <Routes>
      <Route path={routerEnum.SEARCH} element={<ImagesContainer />} />
      <Route path={routerEnum.BOOKMARKS} element={<ImagesContainer />} />
      <Route path={routerEnum.DEFAULT} element={<Navigate to={routerEnum.SEARCH} replace />} />
    </Routes>
  )
}

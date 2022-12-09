import { Navigate, Route, Routes } from 'react-router-dom'
import { ImagesContainer } from '../components/imagesContainer/ImagesContainer'
import {useAppSelector} from "../../bll/hooks";

export const RoutesApp = () => {
  const images = useAppSelector((state) => state.search.images);
  const bookmarks = useAppSelector((state) => state.bookmarks.bookmarksImages)
  return (
    <Routes>
      <Route path='/search' element={<ImagesContainer images={images} />} />
      <Route path='/bookmarks' element={<ImagesContainer images={bookmarks} />} />
      <Route path='/' element={<Navigate to='/search' replace />} />
    </Routes>
  )
}

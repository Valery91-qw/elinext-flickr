import { Navigate, Route, Routes } from 'react-router-dom'
import { ImagesContainer } from '../components/imagesContainer/ImagesContainer'
import { useSelector } from 'react-redux'
import { RootStateType } from '../../bll/store'
import { ImageType } from '../../dal/axios'

export const RoutesApp = () => {
  const images = useSelector<RootStateType, Array<ImageType> | null>((state) => state.search.images)
  const bookmarks = useSelector<RootStateType, Array<ImageType> | null>(
    (state) => state.bookmarks.bookmarksImages,
  )

  return (
    <Routes>
      <Route path='/search' element={<ImagesContainer images={images} />} />
      <Route path='/bookmarks' element={<ImagesContainer images={bookmarks} />} />
      <Route path='/' element={<Navigate to='/search' replace />} />
    </Routes>
  )
}

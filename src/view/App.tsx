import { makeStyles } from 'tss-react/mui'
import { LinearProgress } from '@mui/material'
import { Header } from './components/common/header/Header'
import { Navigation } from './components/common/navigation/Navigation'
import { Footer } from './components/common/footer/Footer'
import { useAppSelector } from '../redux/hooks'
import RoutesApp from './router/RoutesApp'

const useStyles = makeStyles()({
  root: {
    width: '100%',
    position: 'absolute',
    top: '64px',
    backgroundColor: '#D2F700',
  },
  bar2Indeterminate: {
    backgroundColor: '#A69500',
  },
  bar1Indeterminate: {
    backgroundColor: '#FFBC00',
  },
})

export default function App() {
  const isLoad = useAppSelector((state) => state.process.isLoading)

  const { classes } = useStyles()

  return (
    <>
      <Header />
      {isLoad && <LinearProgress classes={classes} />}
      <div style={{ display: 'flex' }}>
        <Navigation />
        <RoutesApp />
      </div>
      <Footer />
    </>
  )
}

import { Outlet } from 'react-router-dom';
import Header from './components/common/header/Header';
import Navigation from './components/common/navigation/Navigation';
import Footer from './components/common/footer/Footer';

const containerStyles = { display: 'flex' };

export default function App() {
  return (
    <>
      <Header />
      <div style={containerStyles}>
        <Navigation />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

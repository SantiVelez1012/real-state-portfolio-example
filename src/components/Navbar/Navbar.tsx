import { Menu } from 'lucide-preact';
import './Navbar.scss';
import { useState } from 'preact/hooks';
import MobileMenu from './components/MobileMenu';
import DesktopMenu from './components/DesktopMenu';

export default function Navbar() {

  const [isMenuDisplayed, setIsMenuDisplayed] = useState(false);

  return (
    <div className="menu">
      <nav className="navbar justify-center flex w-[200px] md:w-[700px] self-center mx-auto">
        <a href="/home">
          <figure className="navbar-icon">
            <img src="./navbar-icon.svg" alt="icon" className="w-[32px]" />
          </figure>
        </a>
        <DesktopMenu />
        <div className="navbar-mobile md:hidden flex justify-center">
          <button onClick={() => setIsMenuDisplayed(!isMenuDisplayed)} className="mx-3 my-1">
            <Menu />
          </button>
        </div>
      </nav>
      {isMenuDisplayed && <div className="displayed-menu w-[200px]">
        <MobileMenu />
      </div>}
    </div>
  )
}
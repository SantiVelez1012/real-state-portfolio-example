import './Navbar.scss';

export default function Navbar() {



  return (
    <nav className="navbar justify-center flex sm:w-[200px] w-full">
      <figure className="navbar-icon">
        <img src="./navbar-icon.svg" alt="icon" className="  w-[32px] " />
      </figure>
      <div className="navbar-mobile sm:flex hidden justify-center">

      </div>
    </nav>
  )
}
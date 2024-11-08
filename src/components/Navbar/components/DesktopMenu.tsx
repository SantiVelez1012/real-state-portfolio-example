import '../Navbar.scss';

export default function DesktopMenu() {
    return (
        <ul className="navbar-desktop hidden md:flex gap-5 px-5">

            <li class="m-2"><a href="/location"> Ubicación </a></li>
            <li class="m-2"><a href="/departments"> Apartamentos </a></li>
            <li class="m-2"><a href="/benefits"> Comodidades </a></li>
            <li class="m-2"><a href="/contact"> Contacto </a></li>

        </ul>
    )
}

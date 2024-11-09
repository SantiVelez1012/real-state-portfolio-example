import './Footer.scss';

export default function Footer() {
    return (
        <footer>

            <div className="footer sm:gap-10 md:gap-60 md:flex-row flex flex-col mx-[55px] md:mx-[155px] items-center md:items-start">

                <div className="flex flex-col justify-center w-[200px] items-center">
                    <figure className="footer-icon">
                        <img src="./navbar-icon.svg" alt="icon" className="w-[50px]" />
                    </figure>

                    <h3 className="text-[25px] font-bold">Inmobiliaria</h3>

                    <h4 className="uppercase text-[14px]"> APARTAMENTOS</h4>

                </div>

                <div className="footer-info w-[350px]">
                    <hr className="sm:hidden border-t-[1px] border-solid my-5" />
                    <div className="footer-info-section">
                        <h3 className="footer-info-section-title"> Apartamento Modelo </h3>
                        <p className="footer-info-section-description"> Calle 66 Sur #25 - 35 </p>
                        <p className="footer-info-section-description"> Sabaneta, Antioquia </p>
                    </div>

                    <div className="footer-info-section">
                        <h3 className="footer-info-section-title"> Horarios de atención </h3>
                        <p className="footer-info-section-description"> Lunes a Domingo </p>
                        <p className="footer-info-section-description"> 10:00 AM a 2:00 PM. </p>
                    </div>

                    <div className="footer-info-section">
                        <h3 className="footer-info-section-title"> Teléfonos </h3>
                        <p className="footer-info-section-description"> Calle 66 Sur #25 - 35 </p>
                        <p className="footer-info-section-description"> Sabaneta, Antioquia </p>
                    </div>

                </div>

            </div>
        </footer>
    )
}

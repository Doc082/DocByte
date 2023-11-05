import {Link, NavLink} from "react-router-dom";
import { AnimationOnScroll } from 'react-animation-on-scroll';


const Header = () => {
    return(
        <>
            <nav
                className="navbar navbar-expand rounded bg-dark fixed-top"
                data-bs-theme="dark"
                aria-label="Eleventh navbar example"
            >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="/img/brand.png" alt="Logo" width="40" height="40"
                             className="d-inline-block align-text-top mx-4"/>
                        DocByte Design
                    </Link>
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/richiedi_preventivo">
                                    Richiedi preventivo
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/chi_sono">
                                    Chi Sono
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-6 col-md-12 text-center head-div my-5">
                        <h1 className="head">DocByte Design</h1>
                        <h3 className="head mb-5"> Siti Web su Misura a Prezzi Competitivi! Il Tuo Successo Online Inizia Qui, da 299€. </h3>
                        <a href="#" className="button-black">Chiedi un Preventivo</a>
                    </div>
                    <div className="circle animate__animated animate__fadeInTopLeft animate__slower animate__delay-1s"></div>
                    <div className="circle_down d-none d-lg-block animate__animated animate__fadeInUp animate__slower animate__delay-1.5s"></div>
                    <div className="img_right d-none d-lg-block animate__animated animate__fadeIn animate__slower animate__delay-0.5s"></div>
                </div>
                <div className="row">
                    <div className="col-12 d-lg-none d-sm-block animate__animated animate__fadeIn animate__slower animate__delay-0.5s">
                        <img className="mw-100 my-5" src="/img/backgr.png" alt="Sfondo"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
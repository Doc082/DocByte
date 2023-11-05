import {Link, NavLink} from "react-router-dom";
import { AnimationOnScroll } from 'react-animation-on-scroll';


const Header = () => {
    return(
        <>
            <nav className="navbar bg-dark border-bottom border-body fixed-top" data-bs-theme="dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/"><img src="/img/brand.png" alt="Logo" width="40" height="40"
                                                                  className="d-inline-block align-text-top mx-4"/>DocByte Design</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" to="/richiedi_preventivo">Richiedi Preventivo</NavLink>
                            <NavLink className="nav-link" to="/chi_sono">Chi sono</NavLink>
                            <NavLink className="nav-link" to="https://github.com/Doc082/">I miei Lavori</NavLink>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container">
            <div className="row mt-5">
                <div className="col-lg-6 col-md-12 text-center head-div my-5">
                    <h1 className="head">DocByte Design</h1>
                    <h3 className="head mb-5"> Siti Web su Misura a Prezzi Competitivi! Il Tuo Successo Online Inizia Qui, da 299€. </h3>
                    <Link to="/richiedi_preventivo" className="button-black">Chiedi un Preventivo</Link>
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
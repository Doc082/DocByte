import {AnimationOnScroll} from "react-animation-on-scroll";

const Preventivo = () =>{
    return(
        <div className="container">
            <div className="text-center mt-5 p-5">
                <AnimationOnScroll animateIn="animate__zoomInDown" animateOnce="true"><img
                    className="rounded-circle shadow-lg d-inline m-5 img-fluid" src="/img/contattami.jpg"/></AnimationOnScroll>
            </div>
            <div className="row">
                <div className="col-12 mb-5">
                    <h2 className="text-center">Contattami:</h2>
                </div>
                <div className="col-sm-6 col-12 offset-lg-5">
                    <a className="social-link" href="mailto:mirkofenu@yahoo.it"><img className="social-img"
                                                                                     src="/img/email.png"/> Email</a>
                </div>
                <div className="col-sm-6 col-12 offset-lg-5">
                    <a className="social-link" href="https://m.me/107640675777078"><img className="social-img"
                                                                                        src="/img/messenger.png"/> Messenger</a>
                </div>
                <div className="col-sm-6 col-12 offset-lg-5">
                    <a className="social-link" href="https://www.facebook.com/profile.php?id=61552606771840"><img
                        className="social-img" src="/img/facebook.png"/> Facebook</a>
                </div>
                <div className="col-sm-6 col-12 offset-lg-5">
                    <a className="social-link" href="https://www.linkedin.com/in/mirko-fenu-5504ab42"><img
                        className="social-img" src="/img/linkenin.png"/> Linkedin</a>
                </div>
            </div>

        </div>
    );
}

export default Preventivo;
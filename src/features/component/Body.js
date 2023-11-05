import {AnimationOnScroll} from "react-animation-on-scroll";
import {Link} from "react-router-dom";

const Body = () => {
   return(
       <>
       <div className="container body-div mt-5">
           <div className="row">
               <div className="col-lg-3 col-md-12 text-center">
                   <img className="img-arrow" src="/img/arrow-left.png" alt="Freccia sinistra"/>
               </div>
               <div className="col-lg-3 d-none d-lg-block text-center order-lg-3">
                   <img className="img-arrow" src="/img/arrow-right.png" alt="Freccia sinistra"/>
               </div>
               <div className="col-lg-6 col-md-12 text-center ">
                   <h3 className="mx-5 display-5">Le nostre offerte</h3>
               </div>
           </div>
           <div className="row mb-5">

               <div className="card col-lg-3 col-md-12 g-lg-5 mb-3">
                   <AnimationOnScroll animateIn="animate__fadeIn" duration="3" animateOnce="true">
                   <div className="card-header text-center">
                       <b>Web App - base</b>
                   </div>
                   <div className="card-body">
                       <h5 className="card-title text-center mb-5"><b>299 € + IVA</b></h5>
                       <div className="row card-text">
                           <div className="col-2">
                               <i className="fa-regular fa-circle-check fa-2xl" style={{color: '#5271ff'}}></i>
                           </div>
                           <div className="col-10">
                               <p>Progettazione</p>
                           </div>
                       </div>
                       <div className="row card-text">
                           <div className="col-2">
                               <i className="fa-regular fa-circle-check fa-2xl" style={{color: '#5271ff'}}></i>
                           </div>
                           <div className="col-10">
                               <p>Realizzazione sito web statico (max 3 pagine)</p>
                           </div>
                       </div>
                       <div className="row card-text">
                           <div className="col-2">
                               <i className="fa-regular fa-circle-xmark fa-2xl" style={{color: '#ff0000'}}></i>
                           </div>
                           <div className="col-10">
                               <p>Hosting</p>
                           </div>
                       </div>
                       <div className="row card-text">
                           <div className="col-2">
                               <i className="fa-regular fa-circle-xmark fa-2xl" style={{color: '#ff0000'}}></i>
                           </div>
                           <div className="col-10">
                               <p>Posizionamento nei motori di ricerca</p>
                           </div>
                       </div>
                       <div className="row card-text">
                           <div className="col-2">
                               <i className="fa-regular fa-circle-xmark fa-2xl" style={{color: '#ff0000'}}></i>
                           </div>
                           <div className="col-10">
                               <p>Pubblicità sui social</p>
                           </div>
                       </div>
                   </div>
                   </AnimationOnScroll>
               </div>
               <div className="card col-lg-4 col-md-12 offset-lg-1 mb-3">
                   <AnimationOnScroll animateIn="animate__fadeIn" duration="4" animateOnce="true">
                   <div className="card-header text-center">
                       <img className="d-sm-inline" src="/img/best-seller.png" alt="best seller"/><p className="d-lg-inline"><b> Web App - Premium</b></p>
                   </div>
                   <div className="card-body">
                       <h3 className="card-title text-center mb-5 text-danger"><b>999 € + IVA</b></h3>
                       <div className="row card-text">
                           <div className="col-2">
                               <i className="fa-regular fa-circle-xmark fa-2xl" style={{color: '#5271ff'}}></i>
                           </div>
                           <div className="col-10">
                               <p>Progettazione</p>
                           </div>
                       </div>
                       <div className="row card-text">
                           <div className="col-2">
                               <i className="fa-regular fa-circle-xmark fa-2xl" style={{color: '#5271ff'}}></i>
                           </div>
                           <div className="col-10">
                               <p>Realizzazione sito web dinamico + blog</p>
                           </div>
                       </div>
                       <div className="row card-text">
                           <div className="col-2">
                               <i className="fa-regular fa-circle-xmark fa-2xl" style={{color: '#5271ff'}}></i>
                           </div>
                           <div className="col-10">
                               <p>Hosting</p>
                           </div>
                       </div>
                       <div className="row card-text">
                           <div className="col-2">
                               <i className="fa-regular fa-circle-xmark fa-2xl" style={{color: '#5271ff'}}></i>
                           </div>
                           <div className="col-10">
                               <p>Posizionamento nei motori di ricerca</p>
                           </div>
                       </div>
                       <div className="row card-text">
                           <div className="col-2">
                               <i className="fa-regular fa-circle-xmark fa-2xl" style={{color: '#5271ff'}}></i>
                           </div>
                           <div className="col-10">
                               <p>Pubblicità sui social</p>
                           </div>
                       </div>
                   </div>
                   </AnimationOnScroll>
               </div>
               <div className="card col-lg-3 col-md-12 g-lg-5 offset-lg-1 mb-3">
                   <AnimationOnScroll animateIn="animate__fadeIn" duration="5" animateOnce="true">
                   <div className="card-header text-center">
                       <p className="d-inline"><b>Web App - Top</b></p>
                   </div>
                   <div className="card-body">
                       <h5 className="card-title text-center mb-5"><b>499 € + IVA</b></h5>
                       <div className="row card-text">
                           <div className="col-2">
                               <i className="fa-regular fa-circle-check fa-2xl" style={{color: '#5271ff'}}></i>
                           </div>
                           <div className="col-10">
                               <p>Progettazione</p>
                           </div>
                       </div>
                       <div className="row card-text">
                           <div className="col-2">
                               <i className="fa-regular fa-circle-check fa-2xl" style={{color: '#5271ff'}}></i>
                           </div>
                           <div className="col-10">
                               <p>Realizzazione sito web dinamico + blog</p>
                           </div>
                       </div>
                       <div className="row card-text">
                           <div className="col-2">
                               <i className="fa-regular fa-circle-xmark fa-2xl" style={{color: '#ff0000'}}></i>
                           </div>
                           <div className="col-10">
                               <p>Hosting</p>
                           </div>
                       </div>
                       <div className="row card-text">
                           <div className="col-2">
                               <i className="fa-regular fa-circle-xmark fa-2xl" style={{color: '#ff0000'}}></i>
                           </div>
                           <div className="col-10">
                               <p>Posizionamento nei motori di ricerca</p>
                           </div>
                       </div>
                       <div className="row card-text">
                           <div className="col-2">
                               <i className="fa-regular fa-circle-xmark fa-2xl" style={{color: '#ff0000'}}></i>
                           </div>
                           <div className="col-10">
                               <p>Pubblicità sui social</p>
                           </div>
                       </div>
                   </div>
                   </AnimationOnScroll>
               </div>
           </div>
       </div>
           <div className="container row mt-5">
    <div className="col-lg-12 col-md-12 text-center head-div my-5">
        <h1 className="head">DocByte Design</h1>
        <h3 className="head mb-5"> Eleva il tuo Business con un Sito Web Vincente
            Trasformiamo i tuoi obiettivi in realtà con siti web che conquistano i clienti.
            Ti offriamo l'accesso a un team di sviluppatori esperti che creano siti web straordinari che attraggono
            e convertono visitatori in clienti. </h3>
        <Link to="/richiedi_preventivo" className="button-black">Chiedi un Preventivo</Link>
    </div>
               <div className="container my-5">
                   <div className="row">
                       <div className="col-lg-3 col-md-12 text-center">
                           <img className="img-arrow" src="/img/arrow-left.png" alt="Freccia sinistra"/>
                       </div>
                       <div className="col-lg-3 d-none d-lg-block text-center order-lg-3">
                           <img className="img-arrow" src="/img/arrow-right.png" alt="Freccia sinistra"/>
                       </div>
                       <div className="col-lg-6 col-md-12 text-center ">
                           <h3 className="mx-5 display-5">Le fasi di realizzazione</h3>
                       </div>
                   </div>
                   <AnimationOnScroll animateIn="animate__fadeIn" duration="3" animateOnce="true">
                       <div className="back-idea d-none d-lg-block mt-2"></div>
                   </AnimationOnScroll>
                   <div className="row">
                       <AnimationOnScroll animateIn="animate__fadeIn" duration="3" animateOnce="true">
                           <div className="d-lg-none d-sm-block col-12 text-center">
                               <img className="mw-100" src="/img/idea-sm.png" alt="immagine Idea"/>
                           </div>
                       </AnimationOnScroll>
                       <AnimationOnScroll animateIn="animate__fadeInLeft" duration="3" animateOnce="true">
                           <div className="col-lg-6 offset-lg-1 col-md-12 div-content my-2">
                               <h2 className="text-center"><b>L'idea</b></h2>
                               <h3>Il primo passo nella creazione di un sito web è l'ideazione.
                                   In questa fase, è essenziale definire l'obiettivo del sito.
                                   Cosa si vuole ottenere con il sito web? Chi è il pubblico di destinazione?
                                   Quali informazioni o servizi si intende fornire? Questa fase implica anche la ricerca di mercato
                                   e la valutazione della concorrenza per identificare opportunità uniche. L'idea del sito web deve
                                   essere chiara e ben definita prima di procedere. </h3>
                           </div>
                       </AnimationOnScroll>
                   </div>
                   <AnimationOnScroll animateIn="animate__fadeIn" duration="3" animateOnce="true">
                       <div className="back-progetto d-none d-lg-block"></div>
                   </AnimationOnScroll>
                   <div className="row">
                       <AnimationOnScroll animateIn="animate__fadeIn" duration="3" animateOnce="true">
                           <div className="d-lg-none d-sm-block col-12 text-center">
                               <img className="mw-100" src="/img/progetto-sm.png" alt="immagine Progetto"/>
                           </div>
                       </AnimationOnScroll>
                       <AnimationOnScroll animateIn="animate__fadeInRight" duration="3" animateOnce="true">
                           <div className="col-lg-6 offset-lg-5 col-md-12 div-content my-2">
                               <h2 className="text-center"><b>La progettazione</b></h2>
                               <h3>Una volta che l'idea è stata stabilita, è il momento di passare alla progettazione.
                                   Qui si crea una struttura concettuale del sito web. Si definiscono gli elementi
                                   chiave come il layout, la navigazione, i colori, i tipi di carattere e lo stile visivo complessivo.
                                   La progettazione può coinvolgere la creazione di wireframe e mockup per visualizzare l'aspetto generale del sito.
                                   In questa fase, si dovrebbe anche pianificare l'esperienza utente per garantire che il sito sia intuitivo e facile
                                   da navigare.</h3>
                           </div>
                       </AnimationOnScroll>
                   </div>
                   <AnimationOnScroll animateIn="animate__fadeIn" duration="3" animateOnce="true">
                       <div className="back-realizzazione d-none d-lg-block"></div>
                   </AnimationOnScroll>
                   <div className="row">
                       <AnimationOnScroll animateIn="animate__fadeIn" duration="3" animateOnce="true">
                           <div className="d-lg-none d-sm-block col-12 text-center">
                               <img className="mw-100" src="/img/realizzazione-sm.png" alt="immagine Realizzazione"/>
                           </div>
                       </AnimationOnScroll>
                       <AnimationOnScroll animateIn="animate__fadeInLeft" duration="3" animateOnce="true">
                           <div className="col-lg-6 offset-lg-1 col-md-12 div-content my-2">
                               <h2 className="text-center"><b>La realizzazione</b></h2>
                               <h3>Una volta completata la fase di progettazione, si passa alla realizzazione effettiva del sito web.
                                   Questo coinvolge l'utilizzo di linguaggi di programmazione come HTML,
                                   CSS, PHP e JavaScript per tradurre il design in un sito web funzionante.
                                   È importante assicurarsi che il sito sia responsivo, cioè che sia adatto sia per desktop
                                   che per dispositivi mobili. Inoltre, possono essere integrate funzionalità dinamiche o database
                                   a seconda delle esigenze del sito. È fondamentale testare il sito web durante questa fase per
                                   individuare e risolvere eventuali errori.</h3>
                           </div>
                       </AnimationOnScroll>
                   </div>
                   <AnimationOnScroll animateIn="animate__fadeIn" duration="3" animateOnce="true">
                       <div className="back-lavoro d-none d-lg-block"></div>
                   </AnimationOnScroll>
                   <div className="row">
                       <AnimationOnScroll animateIn="animate__fadeIn" duration="3" animateOnce="true">
                           <div className="d-lg-none d-sm-block col-12 text-center">
                               <img className="mw-100" src="/img/lavoro-sm.png" alt="immagine Lavoro"/>
                           </div>
                       </AnimationOnScroll>
                       <AnimationOnScroll animateIn="animate__fadeInRight" duration="3" animateOnce="true">
                           <div className="col-lg-6 offset-lg-5 col-md-12 div-content my-2">
                               <h2 className="text-center"><b>Il tuo sito è pronto!</b></h2>
                               <h3>Dopo aver completato la realizzazione e aver superato i test di controllo di qualità,
                                   il sito web è pronto per il lancio. Questa fase implica la messa online del sito in un
                                   ambiente di hosting. È importante assicurarsi che il sito sia ottimizzato per i motori
                                   di ricerca (SEO) per migliorare la sua visibilità online. Una volta online, il sito web
                                   richiederà manutenzione continua per garantire che tutto funzioni correttamente e per apportare
                                   eventuali aggiornamenti in risposta ai feedback degli utenti o alle esigenze in evoluzione del business. </h3>
                           </div>
                       </AnimationOnScroll>
                   </div>
               </div>
               <div className="middle-body text-center">
                    <h4 className="mb-4"><i className="fa-solid fa-code fa-beat" style={{color:'#5271ff'}}></i> DocByte <i
                        className="fa-solid fa-code fa-beat" style={{color:'#5271ff'}}></i></h4>
                   <Link to="/richiedi_preventivo" className="button-black mb-3">Contattami</Link>

               </div>
           </div>
    </>
   );
}

export default Body;
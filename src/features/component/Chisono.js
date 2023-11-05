import {AnimationOnScroll} from "react-animation-on-scroll";
import {Link} from "react-router-dom";

const Chisono = () =>{
    return(
        <div className="container">
            <div className="row whoare p-5">
                <div className="text-center mt-5">
                    <AnimationOnScroll animateIn="animate__zoomInDown" animateOnce="true"><img className="rounded-circle shadow-lg d-inline m-5 img-fluid" src="/img/profilo.jpg"/>
                   <img className="rounded-circle shadow-lg d-inline m-5 img-fluid" src="/img/mirko%20fotografo.png"/></AnimationOnScroll>
                </div>
            </div>
            <div className="head-div text-center p-5">
                <h2><b>DocByte Design - Mirko Fenu Dev</b></h2>
                <h5 className="pt-5"><b>Introduzione</b></h5>
                <p>
                   Buongiorno a tutti! Sono Mirko, un esperto web designer con oltre due decenni di esperienza nella programmazione di siti web. La mia passione è creare soluzioni web che siano attraenti, funzionali e performanti. Nel corso degli anni, ho affinato le mie abilità in vari linguaggi per creare esperienze web straordinarie. Oggi condividerò con voi un po' della mia esperienza e del mio lavoro.</p>

                <h5 className="pt-5"><b>Chi Sono Io?</b></h5>
                <p>Sono Mirko, un esperto web designer con oltre due decenni di esperienza nella programmazione di siti web. La mia passione è creare soluzioni web che siano attraenti, funzionali e performanti.</p>

                <h5 className="pt-5"><b>Linguaggi di Programmazione</b></h5>
                    <p>Nel corso degli anni, ho imparato e padroneggiato una vasta gamma di linguaggi di programmazione, tra cui:

                    PHP: Per la creazione di siti dinamici e applicazioni web.
                    JavaScript: Per aggiungere interattività e dinamicità agli elementi web.
                    MySQL: Per la gestione dei database e l'ottimizzazione delle query.
                    CSS: Per il design e il layout dei siti web.
                    Python: Per sviluppare applicazioni web, script e automatizzare processi.
                        C/C++: Per la programmazione di basso livello e sviluppo di applicazioni performanti.</p>

                <h5 className="pt-5"><b>Nel corso degli anni ho sviluppato una filosofia di lavoro che guida il mio approccio alla progettazione web:</b></h5>

                   <p> Utente al Centro: Ogni progetto inizia con la considerazione delle esigenze degli utenti finali.
                    Prestazioni Ottimali: Ottimizzo costantemente il codice per garantire velocità e reattività.
                    Design Accattivante: Creo design accattivanti che rispecchiano il brand del cliente.
                    Sicurezza: La sicurezza è fondamentale, quindi utilizzo le migliori pratiche per proteggere i dati sensibili.
                    Aggiornamenti Continui: Rimango aggiornato sulle ultime tendenze e tecnologie per offrire soluzioni all'avanguardia.
                    Collaborazioni e Clienti
                       Ho avuto la fortuna di collaborare con una vasta gamma di clienti, dai piccoli imprenditori alle grandi aziende. Alcuni dei miei clienti includono: [elenco dei nomi dei clienti].</p>

                       <h5 className="pt-5"><b>Conclusioni</b></h5>
                       <p>La mia esperienza di 20 anni nella programmazione multilinguaggio mi ha permesso di affinare le mie abilità e di affrontare sfide complesse con successo. Sono sempre alla ricerca di nuove opportunità per creare esperienze web straordinarie e sarei felice di discutere come posso aiutare il vostro prossimo progetto. Grazie per l'attenzione!</p>

                        <h5 className="pt-5"><b>Domande</b></h5>
                    <p className="mb-5">Adesso sono a vostra disposizione per rispondere a qualsiasi domanda o discutere ulteriormente il mio lavoro e la mia esperienza.</p>
                <Link to="/richiedi_preventivo" className="button-black m-5"><b>Contattami</b></Link>
            </div>
        </div>
    );

}

export default Chisono;
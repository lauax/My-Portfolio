import image from '../Images/BildPåMig.jpg';
import image1 from '../Images/göteborg-icon.png';
import image2 from '../Images/hedås-icon.jpg';
import image4 from '../Images/medieinstitutet.jpg';
import image3 from '../Images/teleperformance-icon.jpg';
import './Erfarenhet.css';

const projects = [
   
    {
        title: 'Göteborgs Stad, kultur- och fritidsförvaltningen',
        date: '2016 Juli - 2016 Juli',
        description: 'Jag sommarjobbade som ferieentreprenör. Vår uppgift var att skapa ett event för Göteborgs Stad. Projektet drevs från idé till handling. Vi skapade Pokemon Go Tour där turister kunde ansluta och se Göteborgs stad samtidigt som de spelade. Detta blev mycket populärt och liknande projekt skapades efter vårt, bland annat tog Stena Line efter denna idén.',
        image: image1 
    },
    {
        title: 'Hedås fastighetsservice',
        date: '2021 Maj - 2021 Augusti',
        description: 'Jag jobbade inom fastighetsservice där jag tog hand om trädgårdsarbeten såsom klippning av buskar och gräsmattor. Vi tömde även mycket återvinningskärl och rensade ut skräp från lokaler. Jag är noggrann och hjälpsam och inte rädd för att hugga i.',
        image: image2 
    },
    {
        title: 'Teleperformance Kundservice',
        date: '2021 September - 2022 Maj',
        description: 'Jag jobbade inom service och tog samtal via telefon samt hjälpte kunder med allt från reklamation, leveransfrågor och svarade på allmänna frågor om kunden hade några. Jobbet har lärt mig hur man är serviceminded och uttrycker sig i skrift och tal. Det kräver även en stor portion tålamod.',
        image: image3 
    },
    {
        title: 'Medieinstitutet',
        date: 'Pågående - 2024 Maj',
        description: 'Utbildas till Front end developer',
        image: image4 
    },
];

export const Erfarenhet = () => {
    return (
        <>
            <div id="gif-image">
                <img src={image} alt="" style={{width:'10%'}}/>
                <h1 id="text">Front End Developer</h1>
                <p className="about-me">Om mig:</p>
                <p className="about-me">
                    Jag söker en LIA plats inom Front end. 
                    Jag passar bra in på den angivna profilen.
                    Jag går för närvarande utbildningen Front end developer på Medieinstitutet På denna utbildning utbildas studenter till Front end developer. 
                    Tonvikten ligger på Front end, med fokus på ämnen som HTML, CSS och Javascript. 
                    Jag vill gärna använda dessa färdigheter på och dra nytta av mina kunskaper på bästa möjliga sätt hos er. 
                    Jag skulle beskriva mig själv som någon som är Målinriktad person, Utmanar gärna mig själv och har ett bra tålamod. 
                    Jag jobbar hårt men noggrant jag är väldigt självständig men trivs även bra att jobba i lag kommer bra överens med det flesta. 
                    Dessa egenskaper vill jag gärna ska komma till nytta i er organisation. Med tanke på min utbildning på Medieinstitutet tror jag att jag passar för LIA plasten som Front end developer.
                    De ämnen som lyftes under utbildningen matchar de färdigheter som efterfrågas för denna tjänst. Jag ser fram emot att mer ingående få beskriva min motivation samt relevans för tjänsten som Front end developer under ett personligt samtal. 
                    Du kan nå mig via telefon på 0766377670 eller via e-post på lucas12alfredsson@gmail.com. 
                </p>
            </div>

            
            <h1 id="text">Arbetserfarenhet och Utbildning</h1>
            {projects.map((project, index) => (
                <div className="job-container" key={index}>
                    <div className="job-info">
                        <h3>{project.title} {project.date}</h3>
                        <p>{project.description}</p>
                    </div>
                    <div className="logor">
                        <img src={project.image} alt={`bild${index + 1}`} className="logor" />
                    </div>
                </div>
                
            ))}
        </>
    );
};

export default Erfarenhet;

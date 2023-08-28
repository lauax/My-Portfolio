import image from '../Images/BildPåMig.jpg';
import image2 from '../Images/hedås-icon.jpg';
import image1 from '../Images/kvalitetslogga.jpg';
import image4 from '../Images/medieinstitutet.jpg';
import image3 from '../Images/teleperformance-icon.jpg';
import './Erfarenhet.css';

const projects = [
   
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
    {
        title: 'Fruktbud',
        date: 'Pågående - Sommarjobb',
        description: 'Jag jobbar deltid med att köra ut frukt. Jag sommarjobbade även där nu nästa termin har jag bestämt mig för att lägga fullt fokus på skola istället.',
        image: image1 
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
                    Jag söker en LIA plats inom Frontend. 
                    Jag går för närvarande utbildningen Frontend developer på Medieinstitutet på denna utbildning utbildas studenter till Frontend developer. 
                    Med fokus på ämnen som HTML, CSS och Javascript och olika ramverk såsom ReactJS, NextJS, VueJS, Angular och fler. 
                    Jag vill gärna använda dessa färdigheter på och dra nytta av mina kunskaper på bästa möjliga sätt hos er. 
                      Jag skulle beskriva mig själv som någon som är Målinriktad person, Utmanar gärna mig själv och har ett bra tålamod. 
                    Jag jobbar hårt men noggrant jag är väldigt självständig men trivs även bra att jobba i lag kommer bra överens med det flesta. 
                    Dessa egenskaper vill jag gärna ska komma till nytta i er organisation. Med tanke på min utbildning på Medieinstitutet passar jag till er LIA pratik plats som Front end developer.
                    De ämnen som lyftes under utbildningen matchar de färdigheter som efterfrågas för denna tjänst. Jag ser fram emot att mer ingående få beskriva min motivation samt relevans för tjänsten som Frontend developer under ett personligt samtal. 
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

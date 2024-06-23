import styles from './About.module.scss';
import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse';

const aboutList = {
    fiability: [
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    ],
    respect: [
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    ],
    service: [
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    ],
    safety: [
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    ],
};

const About = () => {
    const getTitleFromKey = (key) => {
        const titleMap = {
            fiability: 'Fiabilité',
            respect: 'Respect',
            service: 'Service',
            safety: 'Sécurité',
        };
        return titleMap[key] || key;
    };

    return (
        <div className={styles.about}>
            <Banner
                title=""
                image="src/assets/images/about.webp"
                opacity={0.7}
            />
            {Object.entries(aboutList).map(([key, value]) => (
                <Collapse
                    key={key}
                    title={getTitleFromKey(key)}
                    content={value}
                />
            ))}
        </div>
    );
};

export default About;

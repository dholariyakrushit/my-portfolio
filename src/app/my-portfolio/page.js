import Image from 'next/image';
import Link from 'next/link';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';

import movix from '../../assets/image/portfolio/movix.png';
import pantoui from '../../assets/image/portfolio/pantoui.png';
import golobeui from '../../assets/image/portfolio/golobeui.png';
function portfolio() {
    let data=[{
        id:1,
        title:"movix",
        description:"Embark on a cinematic journey with our movie details web app, offering users the ability to explore a diverse array of films and TV serials. Immerse yourself in a visually appealing interface, where you can view comprehensive details, ratings, and reviews contributed by the community.",
        img:movix,
        link:"https://movix-channel.netlify.app/"
    },
    {
        id:2,
        title:"golobe",
        description:"Travel planning with our user-friendly UI for booking both travel and hotel tickets. ",
        img:golobeui,
        link:"https://golobedesign.netlify.app/"
    },
    {
        id:3,
        title:"panto",
        description:"Step into a world of refined simplicity with our minimalistic and modern UI design, meticulously tailored with Tailwind CSS. Uncomplicated yet sophisticated, our interface blends clean lines and contemporary aesthetics for a visually pleasing and intuitive user experience.",
        img:pantoui,
        link:"https://panto-tailwind.netlify.app/"
    },
    
]
    return (
        <div className='portfolio-page container'>
            <div className='card-section'>
                {data && data.map((item,index)=>
                <Link className="project-link" href={item.link} target="_blank"
                >
                <Card
                    key={index}
                >
                    <CardBody>
                        <CardTitle tag="h5" className=''>
                            {item.title}
                        </CardTitle>
                        
                    </CardBody>
                    <Image
                        alt="Card cap"
                        src={item.img}
                        className="img-fluid"
                        width={350}
                    />
                    <CardBody>
                        <CardText>
                            {item.description}
                        </CardText>
                    </CardBody>
                </Card>
                </Link>
                )}
            </div>
        </div>
    )
}

export default portfolio
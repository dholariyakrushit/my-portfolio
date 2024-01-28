import Image from 'next/image';
import Link from 'next/link';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';

import portfoliobanner from '../../assets/image/portfolio/portfoliobanner.svg';

function portfolio() {
    let data=[{
        id:1,
        title:"movix",
        description:"",
        img:portfoliobanner,
        link:"https://movix-channel.netlify.app/"
    },
    {
        id:2,
        title:"golobe",
        description:"",
        img:portfoliobanner,
        link:"https://golobedesign.netlify.app/"
    },
    {
        id:3,
        title:"panto",
        description:"",
        img:portfoliobanner,
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
                            Some quick example text to build on the card title and make up the bulk of the card‘s content.
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
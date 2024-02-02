"use client"
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import { motion, AnimatePresence } from 'framer-motion';

import movix from '../../assets/image/portfolio/movix.png';
import pantoui from '../../assets/image/portfolio/pantoui.png';
import golobeui from '../../assets/image/portfolio/golobeui.png';
import ecom from '../../assets/image/portfolio/ecom.png';
function portfolio() {
    let data = [{
        id: 1,
        title: "movix",
        description: "Embark on a cinematic journey with our movie details web app, offering users the ability to explore a diverse array of films and TV serials. Immerse yourself in a visually appealing interface, where you can view comprehensive details, ratings, and reviews contributed by the community.",
        img: movix,
        link: "https://movix-channel.netlify.app/"
    },
    {
        id: 2,
        title: "golobe",
        description: "Travel planning with our user-friendly UI for booking both travel and hotel tickets. ",
        img: golobeui,
        link: "https://golobedesign.netlify.app/"
    },
    {
        id: 3,
        title: "panto",
        description: "Step into a world of refined simplicity with our minimalistic and modern UI design, meticulously tailored with Tailwind CSS. Uncomplicated yet sophisticated, our interface blends clean lines and contemporary aesthetics for a visually pleasing and intuitive user experience.",
        img: pantoui,
        link: "https://panto-tailwind.netlify.app/"
    },
    {
        id: 4,
        title: "Ecom service ",
        description: "Designed and developed a seamless e-commerce web application with user-friendly features, enabling users to effortlessly add products to their cart, explore detailed product information, and implement secure authentication through local storage. Elevated user experience and functionality showcased in my portfolio",
        img: ecom,
        link: "https://ecom-service.netlify.app/"
    },

    ]
    return (
        <div className='portfolio-page container'>
            <div className='card-section'>
                <AnimatePresence>
                    {data && data.map((item, index) =>
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            endHove={{ scale: 1 }}
                        >
                            <Link className="project-link" href={item.link} target="_blank" passHref rel="noopener noreferrer"
                            >
                                <Card
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
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default portfolio
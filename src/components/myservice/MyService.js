"use client"
import Image from 'next/image';
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import { motion } from 'framer-motion';

import createsolution from '../../assets/image/myservice/createsolution.svg';
import circle from '../../assets/image/myservice/circle.svg';
import uiuxdesign from '../../assets/image/myservice/uiuxdesign.svg';
import codelogo from '../../assets/image/myservice/codelogo.svg';
function MyService() {


    let data = [{
        id: 1,
        title: "Creative solutions",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
        img: createsolution
    },
    {
        id: 2,
        title: "UI & UX Design",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
        img: uiuxdesign
    },
    {
        id: 3,
        title: "Web development",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
        img: codelogo
    },
    ]
    return (
        <div className='my-service container'>
            <p className='service-title'>SERVICES</p>
            <h5 className='sub-title'>My <span>other services</span></h5>
            <p className='description'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            <div className='card-section'>
                {data &&
                    data.map((item) => (
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <Card>
                                <Image src={circle} alt="sidecircle" className="circle" />
                                <Image src={item.img} alt="sidecircle" className="service-logo" />
                                <CardBody>
                                    <CardTitle tag="h5">{item.title}</CardTitle>
                                    <div className="d-flex justify-content-center">
                                        <CardSubtitle className="border-line"></CardSubtitle>
                                        <CardSubtitle className="border-second"></CardSubtitle>
                                    </div>
                                    <CardText>{item.description}</CardText>
                                </CardBody>
                            </Card>
                        </motion.div>
                    ))}
            </div>
        </div>
    )
}

export default MyService
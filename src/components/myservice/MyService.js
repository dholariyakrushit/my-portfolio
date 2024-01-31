"use client"
import Image from 'next/image';
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import { motion } from 'framer-motion';

import createsolution from '../../assets/image/myservice/createsolution.svg';
import circle from '../../assets/image/myservice/circle.svg';
import uiuxdesign from '../../assets/image/myservice/uiuxdesign.svg';
import codelogo from '../../assets/image/myservice/codelogo.svg';
function MyService() {
    let data = [
        {
            id: 1,
            title: "Creative Solutions",
            description: "Unlock innovative and imaginative solutions tailored to meet your unique needs. Our team is dedicated to crafting creative strategies that go beyond the ordinary, ensuring your project stands out in the crowd.",
            img: createsolution
        },
        {
            id: 2,
            title: "UI & UX Developer",
            description: "Experience the perfect blend of aesthetics and functionality with our UI & UX development services. Our developers are committed to creating seamless and visually appealing user interfaces that enhance the overall user experience.",
            img: uiuxdesign
        },
        {
            id: 3,
            title: "Web Development",
            description: "Embark on a journey of digital excellence with our web development expertise. From concept to code, we bring your ideas to life, ensuring your website is not just functional but also visually engaging and user-friendly.",
            img: codelogo
        },
    ];

    return (
        <div className='my-service container'>
            <p className='service-title'>SERVICES</p>
            <h5 className='sub-title'>My <span>other services</span></h5>
            <p className='description'>
                Unlock innovation with creative solutions, seamless UI & UX development, and web expertise for visually engaging, user-friendly websites.</p>
            <div className='card-section'>
                {data &&
                    data.map((item) => (
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4,delay:0.3 }}
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
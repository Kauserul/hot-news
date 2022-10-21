import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin, FaTwitch } from "react-icons/fa";
import BrandCarosal from '../BrankCarosal/BrandCarosal';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login With Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
            <div className='mt-3'>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-3'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaWhatsapp></FaWhatsapp> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaLinkedin></FaLinkedin> LinkeDin</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarosal></BrandCarosal>
            </div>
        </div>
    );
};

export default RightSideNav;
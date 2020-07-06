import React from 'react';

import Aakash_Baranwal from '../assets/images/Aakash_Baranwal.jpeg';
import me from '../assets/images/me.png';
import aakash_baranwal from '../assets/images/aakash_baranwal.png';
import Card from '../components/Card';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Carousel extends React.Component{

    constructor(props) {

        super(props);
        this.state = {

            items: [
                {
                    id:0,
                    title: 'Dev Grub',
                    subTitle: 'Cookbook for developers',
                    imgSrc: Aakash_Baranwal,
                    link: 'https://github.com/aakashbaranwal/',
                    selected: false
                },
                {
                    id:1,
                    title: 'Dev Grub',
                    subTitle: 'Cookbook for developers',
                    imgSrc: Aakash_Baranwal,
                    link: 'https://github.com/aakashbaranwal/',
                    selected: false
                },
                {
                    id:2,
                    title: 'Dev Grub',
                    subTitle: 'Cookbook for developers',
                    imgSrc: Aakash_Baranwal,
                    link: 'https://github.com/aakashbaranwal/',
                    selected: false
                },
            ]

        }
    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }
    render(){
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel; 
import React from 'react';

import Aakash_Baranwal from '../assets/images/Aakash_Baranwal.jpeg';
import me from '../assets/images/me.png';
import aakash_baranwal from '../assets/images/aakash_baranwal.png';

class Carousel extends React.Component{

    constructor(props) {

        super(props);
        this.state = {

            items: [
                {
                    id:0,
                    title: 'Dev Grub',
                    subTitle: 'Cookbook for developers',
                    imgSrc: aakash_baranwal,
                    link: 'https://github.com/aakashbaranwal/',
                    selected: false
                },
                {
                    id:1,
                    title: 'Dev Grub',
                    subTitle: 'Cookbook for developers',
                    imgSrc: me,
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

    render() {
        return (
            <p>hi i am aakash baranwal and this carouselworks</p>
        );
    }
}

export default Carousel; 
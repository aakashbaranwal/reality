import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function ExperiencePage(props){
    return(
        <div>
            <Hero title={props.title} />
            
            <Content>
            
            <p>My name is Aakash Baranwal</p>
        
            </Content>
        
        </div>

    );
}

export default ExperiencePage;
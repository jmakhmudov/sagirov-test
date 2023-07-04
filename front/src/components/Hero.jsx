import React from 'react';
import Card from "./Card";
import { useState } from 'react';

const Hero = ({cards}) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        setMousePosition({ x, y });
    };


    return (
        <section className="hero-container">
            <div className='hero'>
                <div className='left-section'>
                    <div className="main-text">
                        <span>ПУТЕШЕСТВИЕ</span>
                        <br />
                        на красную планету
                    </div>

                    <div className='start-btn'>
                        <img src="corner.png" alt="" className='left' />
                        <img src="corner.png" alt="" className='right' />
                        Начать путешествие
                    </div>

                </div>

                <div id="cards" className="cards" onMouseMove={handleMouseMove}>
                    {cards.map((card) => (
                        <div
                            key={card.top}
                            className="card"
                            style={{
                                '--mouse-x': `${mousePosition.x}px`,
                                '--mouse-y': `${mousePosition.y}px`,
                            }}
                        >
                            <Card top={card.top} value={card.value} bottom={card.bottom}/>
                        </div>
                    ))}
                </div>
                <img src="figure.png" alt="" className="figure" />
            </div>
        </section>
    )
}

export default Hero
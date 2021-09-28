import React from 'react'

import Close from '../ui/Close'

import classes from "./about.scss"

import mockup1 from "../../public/images/mockup/1.jpg";
import mockup2 from "../../public/images/mockup/2.jpg";
import mockup3 from "../../public/images/mockup/3.jpg";

function About(props) {

    return (
        <div className="about-container">
            <Close handleClick={() => props.handleHistoryPush('/')} />
            <div className='about-text'>
                <div className='about-text-title'>
                    O projektu
                </div>

                <div className='about-text-paragraph'>
                    Webová stránka vznikla jako součást mé diplomové práce v ateliéru <a href='https://www.umprum.cz/web/cs/grafika/graficky-design-a-nova-media' target="_blank"> Grafického designu a nových médii</a> na UMPRUM.
                    <br /> <br />
                    Chtěl bych ji věnovat všem bývalým, aktuálním i budoucím členům oddílu. Fotografie, texty a ilustrace zde zachycují 75 let naší činnosti.
                    <br /> <br />
                    Společně s webem vychází i 80 stránková publikace v nákladu 20 kusů. Pokud máte o publikaci zájem, napište mi na <a href="mailto:brona.musil@gmail.com">brona.musil@gmail.com</a>, na příští oddílové akci je vaše. Pokud si chcete knihu pouze prohlédnout, určitě narazíte na pár kusů, které jsem nechal oddílem putovat.
                    <br /> <br />
                    Pádík – Bronislav Musil, 2021
                </div>

            </div>
            <div className='about-mockup-container'>
                <img src={mockup1} className='about-mockup'></img>
                <img src={mockup2} className='about-mockup'></img>
                <img src={mockup3} className='about-mockup'></img>

            </div>

        </div>
    )
}


export default About
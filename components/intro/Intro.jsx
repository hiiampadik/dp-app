import React from 'react'

import logo1 from "../../public/images/logos/logo-1.svg";
import logo2 from "../../public/images/logos/logo-2.svg";
import logo3 from "../../public/images/logos/logo-3.svg";

import classes from './intro.scss'

function Intro(props) {

    return (
        <div className="intro-container">



            <div className="intro-header-container">
                <div className="intro-buttons-container">
                    <a href="https://94bo.skauting.cz/" className="button intro-button" target="_blank">
                        Domů
                    </a>
                    <div className="button intro-button" onClick={() => props.handleHistoryPush('/about')}>
                        O{'\u00A0'}projektu
                    </div>
                </div>

                <div className="intro-logo-container">
                    <img src={logo2} className="intro-logo" />
                    <img src={logo3} className="intro-logo" />
                </div>

            </div>

            <div className="intro-text-container">
                <h1>Historie 94.{'\u00A0'}oddílu Mirka{'\u00A0'}Klepáče</h1>
                <p className='intro-text'>
                    Základem vzniku devadesátého čtvrtého oddílu skautů byla družina Kondorů z{'\u00A0'}10.{'\u00A0'}oddílu, která zahájili svoji činnost pod vedením bratra Zdeňka Matěje ihned po ukončení druhé světové války v{'\u00A0'}roce 1945. V{'\u00A0'}této poválečné době nastal v{'\u00A0'}Československu veliký rozmach skautingu. Členská základna se rychle rozrůstala a{'\u00A0'}oddíly, kam přicházelo stále více a{'\u00A0'}více nových členů, řešily tento příliv tvořením dalších družin. Pro usnadnění práce vedoucích, tvořili se z{'\u00A0'}několika družin čety a{'\u00A0'}z{'\u00A0'}několika čet roty. <br /><br />
                    V{'\u00A0'}červenci 1945, po návratu z{'\u00A0'}ciziny, zapojil se do činnosti předválečný člen 3.{'\u00A0'}brněnského oddílu br.{'\u00A0'}Klepáč, který tak splnil slib daný po rozpuštění Skautingu v{'\u00A0'}roce 1940, že se po válce znovu zapojí do skautské organizace. Svoji činnost zahájil v{'\u00A0'}družině Kondorů.<br /><br />
                    Koncem roku 1945 rozhodla se oddílová rada vzhledem k{'\u00A0'}velkému množství členů, rozdělit oddíl ve 3{'\u00A0'}oddíly 10.{'\u00A0'}BO, 94.{'\u00A0'}BO a 95.{'\u00A0'}BO. Vedením 94.{'\u00A0'}oddílu byl pověřen br.{'\u00A0'}Klepáč.
                </p>
            </div>


        </div>
    )
}


export default Intro
import React from 'react'

import logo1 from "../../public/images/logos/logo-1.svg";
import logo2 from "../../public/images/logos/logo-2.svg";
import logo3 from "../../public/images/logos/logo-3.svg";

import classes from './intro.scss'

function Intro(props) {

    return (
        <div className="intro-container">
            <div className="intro-container-left">
                <div className="intro-buttons">
                    <a href="https://94bo.skauting.cz/" className="intro-button" target="_blank">
                        Domů
                    </a>
                    <div className="intro-button" onClick={() => props.handleHistoryPush('/about')}>
                        O projektu
                    </div>
                </div>


                <div className='intro-title'>Historie 94. oddílu Mirka Klepáče</div>
                <div className='intro-text'>
                    <p>
                        Základem vzniku devadesátého čtvrtého oddílu skautů byla družina Kondorů z{'\u00A0'}10.{'\u00A0'}oddílu, které zahájili svoji činnost pod vedením bratra Zdeňka Matěje ihned po ukončení světové války v{'\u00A0'}roce 1945. V{'\u00A0'}této poválečné době nastal v{'\u00A0'}Československu veliký rozmach skautingu. Členská základna se rychle rozrůstala a{'\u00A0'}oddíly, kam přicházelo stále více a{'\u00A0'}více nových členů, řešily tento příliv tvořením dalších družin. Pro usnadnění práce vedoucích, tvořili se z{'\u00A0'}několika družin čety a{'\u00A0'}z{'\u00A0'}několika čet roty. <br /><br />
                        V{'\u00A0'}červenci 1945, po návratu z{'\u00A0'}ciziny, zapojil se do činnosti předválečný člen 3.{'\u00A0'}brněnského oddílu br.{'\u00A0'}Klepáč, který tak splnil slib daný po rozpuštění Skautingu v{'\u00A0'}roce 1940, že se po válce znovu zapojí do skautské organizace. Svoji činnost zahájil v{'\u00A0'}družině Kondorů.<br /><br />
                        Koncem roku 1945 rozhodla se oddílová rada vzhledem k{'\u00A0'}velkému množství členů, rozdělit oddíl ve 3{'\u00A0'}oddíly 10.{'\u00A0'}BO, 94.{'\u00A0'}BO a 95.{'\u00A0'}BO. Vedením 94.{'\u00A0'}oddílu byl pověřen br.{'\u00A0'}Klepáč.
                    </p>
                </div>
            </div>
            <div className="intro-container-right">
                <img src={logo2} className="intro-logo" />
                <img src={logo3} className="intro-logo" />
                {/* <img src={logo1} className="landing-intro-logo"/> */}
            </div>
        </div>
    )
}


export default Intro
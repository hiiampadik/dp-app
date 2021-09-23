import React from 'react'

import LandingIntroButton from '../ui/LandingIntroButton'

function LandingIntro(props) {

    return (
        <div className="landing-intro-container">
            <div className="landing-intro-buttons">
                <LandingIntroButton text={"Domů"} handleClick={() => props.handleHistoryPush('/about')}/>
                <LandingIntroButton text={"O projektu"} handleClick={() => props.handleHistoryPush('/about')}/>
                {/* <div style={{clear: "both"}}></div> */}
            </div>
            

            <div className='title'>Historie 94. oddílu Mirka Klepáče</div>
            <div className='landing-intro-text'>
                <p>
                    Základem vzniku devadesátého čtvrtého oddílu skautů byla družina Kondorů z 10. oddílu, které zahájili svoji činnost pod vedením bratra Zdeňka Matěje ihned po ukončení světové války v roce 1945. V této poválečné době nastal v Československu veliký rozmach skautingu. Členská základna se rychle rozrůstala a oddíly, kam přicházelo stále více a více nových členů, řešily tento příliv tvořením dalších družin. Pro usnadnění práce vedoucích, tvořili se z několika družin čety a z několika čet roty. <br/><br/>
                    V červenci 1945, po návratu z ciziny, zapojil se do činnosti předválečný člen 3. brněnského oddílu br. Klepáč, který tak splnil slib daný po rozpuštění Skautingu v roce 1940, že se po válce znovu zapojí do skautské organizace. Svoji činnost zahájil v družině Kondorů.<br/><br/>
                    Koncem roku 1945 rozhodla se oddílová rada vzhledem k velkému množství členů, rozdělit oddíl ve 3 oddíly 10. BO, 94. BO a 95. BO. Vedením 94. oddílu byl pověřen br. Klepáč.
                </p>
            </div>
        </div>
    )
}


export default LandingIntro
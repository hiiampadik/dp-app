import React from 'react'
import ReactDOM from 'react-dom'

function LandingPage(props) {
    return (
        <div className="landing-container">
            <div className="landing-text">
                <div className="landing-headline">
                    94. oddíl Mirka Klepáče
                </div>
                <p>
                    Při mém pátrání po kronikách našeho 94. oddílu jsem našel celkem 16 kronik, které dokumentují údálosti různých dob a různých generací chlapců, kteří oddílem prošli. Je to často úchvatné čtení, protože můžete porovnávat vyprávění jiných o věcech, které jste třeba sami zažili, a teď vidíte jak je prožili a popsali jiní. Na našich kronikách je dobré právě to, že mají mnoho autorů. To jim dává zvláštní pravdivost a atmosféru. Každý zápis je originálem, i když často chybí datum i autor, sdělení ale zůstává a jeho zajímavost s postupem doby narůstá.
                </p>
                <p>
                    Proto vidím, že je dobré a důležité kroniky psát. Většina kronik samozřejmě není dopsaná, tak jak vyprchala vůle a snaha pokračovat. I tak jsou to dokumenty o chuti něco podnikat a pokračovat v putování po skautských stezkách.
                </p>
                <div onClick={() => props.handleHeader('/map')} className="landing-map">
                    Mapa
                </div>
                <div onClick={() => props.handleHeader('/timeline')} className="landing-map">
                    Osa
                </div>
            </div>
        </div>
    )
}


export default LandingPage
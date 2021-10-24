import React from 'react'
import '../../scss/cta-Top.scss'
import {withRouter} from 'react-router-dom';

const Top = (props) => {
    const navProduct =()=>{
        props.history.push('/product')
    }
    return (
        <div className="cta-top"> 
        <div className="cta-top__img" />
            <div className="cta-top_textbox">
            <div className="cta-top_textbox_headline">
                    Automate Your Future!
                    </div>
                    <div className="cta-top_textbox_story">
                   Did you know 20% business owners work over 60 hours per week? learn to work smarter,by leveraging technologies.
                    </div>
                    <div className="cta-top_textbox_story">
                 In this Two weeks of course ,You'll focus on the bigger picture whileyou implement the most powerfull automated sales system ever created.
                    </div>
                    <input className="cta-top_textbox_btn" type="submit" value="Learn the Alchemy of automations"
                     onClick={()=> navProduct()}/>
            </div>
              
        </div>
    )
}

export default withRouter(Top);

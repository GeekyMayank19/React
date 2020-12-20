import React from 'react'
import InfoIcon from '@material-ui/icons/Info';
import './Widgets.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
function Widgets() {

    const newsArtical = (heading, subtitle) => (

        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>

    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArtical("PAPA React is back", "Top news -9990 readers")}
            {newsArtical("PAPA React is back", "Top news -9990 readers")}
            {newsArtical("PAPA React is back", "Top news -9990 readers")}
            {newsArtical("PAPA React is back", "Top news -9990 readers")}
            {newsArtical("PAPA React is back", "Top news -9990 readers")}
            {newsArtical("PAPA React is back", "Top news -9990 readers")}
        </div>
    )
}

export default Widgets

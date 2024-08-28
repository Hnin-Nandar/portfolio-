import React from "react";
import './awards.css';
import { GoArrowUpRight } from "react-icons/go";

const Award = () => {
    return (
        <div className="awardSection border">
            <div className="col3">
                <h1 className="award">Awards</h1>
            </div>
            <div className="col3 row">
                <div className="row4">
                    <GoArrowUpRight className="icon3" stroke='#1E0044' size='2.5em' fill='#1E0044' />
                    <h2>2022 Designer of the year nomination</h2>
                    <p>AWWWARDS</p>

                </div>
                <div className="row4">
                    <GoArrowUpRight className="icon3" stroke='#1E0044' size='2.5em' fill='#1E0044' />
                    <h2>Site of the day winner - Korba</h2>
                    <p>WEB DESIGN INSPIRATION AWARDS</p>
                </div>
                <div className="row4">
                    <GoArrowUpRight className="icon3" stroke='#1E0044' size='2.5em' fill='#1E0044' />
                    <h2>Site of the month nomination - TrailHive</h2>
                    <p>CSS DESIGN AWARDS</p>
                </div>
                <div className="row4">
                    <GoArrowUpRight className="icon3" stroke='#1E0044' size='2.5em' fill='#1E0044' />
                    <h2>2021 Designer of the year nomination</h2>
                    <p>PIXEL AWARDS</p>
                </div>
            </div>
        </div>
    )
}

export default Award;
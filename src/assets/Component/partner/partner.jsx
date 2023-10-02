import React from "react";
import "../../SCSS/reset.scss";
import "../../Component/partner/partner.scss";
import fpt from "../../img/FPT_logo.png";
import viettel from "../../img/viettel_logo.png";
import vin from "../../img/Vingroup_logo.png";
import vnpt from "../../img/VNPT-Logo.png";
export default function PartnerComponent(){
    return (
        <>
            <div id="global-partner">
                <h1 className="text-4xl font-bold">Đối tác chiến lược</h1>
                <hr className="tag-line-component"/>    
                <br />
                <div className="partner-container flex justify-center">
                    <img src={fpt} alt="" />
                    <img src={vin} alt="" />
                    <img src={vnpt} alt="" />
                    <img src={viettel} alt="" />
                </div>
            </div>
        </>
    )
}
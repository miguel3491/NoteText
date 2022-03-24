import React from "react"

function Footer(){
    const year = new Date().getFullYear();
    return (
        <div>
            <p>ⓒ Copyright Miguel Cano - {year}</p>
        </div>
      );
}

export default Footer;
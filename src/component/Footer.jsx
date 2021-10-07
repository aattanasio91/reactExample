import React from 'react';

const Footer = () => {

    const year = new Date().getFullYear();

    return ( 
        <div>
            Todos los derechos reservados - {year}
        </div>
     );
}
 
export default Footer;
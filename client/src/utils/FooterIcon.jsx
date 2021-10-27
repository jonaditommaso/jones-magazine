import React from 'react';

function FooterIcon({children, href}) {
    return (
        <a 
            href={href} 
            target='_blank' 
            rel="noopener noreferrer"
        >
            {children}
        </a>
    );
}

export default FooterIcon;

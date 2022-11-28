import React from 'react';

const THomeCard = ({name}) => {
    const{className}=name;
    // console.log(name)
    return (
        <div>
            {className}
        </div>
    );
};

export default THomeCard;
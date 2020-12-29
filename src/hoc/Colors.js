import React from 'react';

const Colors = (WrappedComponent) => {
    const colours =['red','pink','green','yellow'];
    const randomColour= colours[Math.floor(Math.random()*5)];
    const className = randomColour + '-text';

    return(props)=>{
        return(
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}
 
export default Colors;
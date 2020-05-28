import React from 'react';

interface IName {
    test: string,
    value: number
}

export const Test = (porps:IName) => {
    const {
        test, value
    } = porps;
    return (
        <div>
            {test} - {value}
        </div>
    )
}  
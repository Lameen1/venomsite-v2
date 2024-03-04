import React, { PropsWithChildren, ReactNode } from 'react'

interface ContentProps {
    children?: ReactNode;
}
function Contents(props: PropsWithChildren) {
    return (
    <div className="h-full w-full flex justify-center">
        <div className=" bg-white p-4 h-full lg:w-4/5 w-full ">
            {props.children}
        </ div>
    </div>
    )
}

export default Contents
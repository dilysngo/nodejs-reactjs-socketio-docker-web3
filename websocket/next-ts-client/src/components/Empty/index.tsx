import React, { PropsWithChildren } from "react";

const Empty: React.FC<PropsWithChildren> = ({ children, ...props }) => {
    return (
        <div className="empty-style" {...props}>
            {children || "Empty Data"}
        </div>
    );
};

export default Empty

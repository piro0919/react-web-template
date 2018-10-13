import * as React from 'react';
export interface ReactWebTemplateProps {
    children?: React.ReactNode;
    className?: string;
    contentClassName?: string;
    footer?: React.ReactNode;
    footerClassName?: string;
    header?: React.ReactNode;
    headerClassName?: string;
    leftNav?: React.ReactNode;
    leftNavClassName?: string;
    mainClassName?: string;
    rightNav?: React.ReactNode;
    rightNavClassName?: string;
    wrapperClassName?: string;
}
export declare const reactWebTemplateDefaultProps: {
    children: null;
    className: string;
    contentClassName: string;
    footer: null;
    footerClassName: string;
    header: null;
    headerClassName: string;
    leftNav: null;
    leftNavClassName: string;
    mainClassName: string;
    rightNav: null;
    rightNavClassName: string;
    wrapperClassName: string;
};
declare const ReactWebTemplate: React.SFC<ReactWebTemplateProps>;
export default ReactWebTemplate;

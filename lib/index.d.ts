import * as React from 'react';
import './styles/global';
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
    scrollWrapperClassName?: string;
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
    scrollWrapperClassName: string;
    wrapperClassName: string;
};
interface ReactWebTemplateState {
    windowHeight: number;
}
declare class ReactWebTemplate extends React.Component<ReactWebTemplateProps, ReactWebTemplateState> {
    static defaultProps: {
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
        scrollWrapperClassName: string;
        wrapperClassName: string;
    };
    constructor(props: ReactWebTemplateProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    onResizeWindow(): void;
    render(): JSX.Element;
}
export default ReactWebTemplate;

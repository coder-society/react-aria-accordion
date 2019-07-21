import React, { Component, ReactNode } from 'react';
import { KeyboardEventListener } from './event-listeners';
declare type Context = {
    accordionId: string;
    disableRegions: boolean;
    onHeaderKeyDown: KeyboardEventListener;
    addSection: (sectionId: string, expandSection: () => void, collapseSection: () => void) => void;
    removeSection: (sectionId: string) => void;
};
export declare const AccordionConsumer: React.ComponentType<React.ConsumerProps<Context>>;
declare type RenderProps = {
    expandAllSections: () => void;
    collapseAllSections: () => void;
};
declare type Props = {
    wrapHeaderNavigation?: boolean;
    children: (renderProps: RenderProps) => ReactNode;
};
declare type State = {
    id: string;
    sections: Array<{
        id: string;
        expand: () => void;
        collapse: () => void;
    }>;
};
declare class Accordion extends Component<Props, State> {
    state: State;
    private domHeaders;
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
    private expandAllSections;
    private collapseAllSections;
    private addSection;
    private removeSection;
    private setDomHeaders;
    private focusFirstHeader;
    private focusLastHeader;
    private focusNextHeader;
    private focusPreviousHeader;
    private handleHeaderKeyDown;
}
export default Accordion;

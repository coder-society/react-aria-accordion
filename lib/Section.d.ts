import React, { ReactNode } from 'react';
declare type Context = {
    sectionId: string;
    expanded: boolean;
    onToggle: (nextExpanded: boolean) => void;
};
export declare const SectionConsumer: React.ComponentType<React.ConsumerProps<Context>>;
declare type RenderProps = {
    getSectionProps: (props?: {
        [key: string]: any;
    }) => {
        'data-accordion-id-type': string;
    };
    expanded: boolean;
};
declare type Props = {
    defaultExpanded?: boolean;
    expanded?: boolean;
    onToggle?: (nextExpanded: boolean) => void;
    children: (renderProps: RenderProps) => ReactNode;
};
declare const Section: ({ defaultExpanded, expanded, onToggle, children }: Props) => JSX.Element;
export default Section;

import { ReactNode, SFC } from 'react';
import { EventListener, KeyboardEventListener } from './event-listeners';
declare type HeadingProps = {
    'aria-level': number;
    role: 'heading';
};
declare type ToggleProps = {
    id: string;
    'aria-controls': string;
    'aria-disabled': boolean | undefined;
    'aria-expanded': boolean;
    'data-accordion-id-type': string;
    onClick: EventListener;
    onKeyDown: KeyboardEventListener;
};
declare type ElementToggleProps = ToggleProps & {
    onKeyPress: KeyboardEventListener;
    role: 'button';
    tabIndex: 0;
};
declare type ButtonToggleProps = ToggleProps & {
    disabled?: boolean;
};
declare type RenderProps = {
    expanded: boolean;
    getHeadingProps: (props?: {
        [key: string]: any;
    }) => HeadingProps;
    getElementToggleProps: (props?: {
        [key: string]: any;
    }) => ElementToggleProps;
    getButtonToggleProps: (props?: {
        [key: string]: any;
    }) => ButtonToggleProps;
};
declare type Props = {
    disabled?: boolean;
    headingLevel?: number;
    children: (renderProps: RenderProps) => ReactNode;
};
declare const Header: SFC<Props>;
export default Header;

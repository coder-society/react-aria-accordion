import { ReactNode } from 'react';
declare type PanelProps = {
    id: string;
    role: 'region' | undefined;
    'aria-labelledby': string;
    'aria-hidden': true | undefined;
    hidden: true | undefined;
};
declare type RenderProps = {
    expanded: boolean;
    getPanelProps: (props?: {
        [key: string]: any;
    }) => PanelProps;
};
declare type Props = {
    children: (renderProps: RenderProps) => ReactNode;
};
declare const Panel: ({ children }: Props) => JSX.Element;
export default Panel;

import { LinkingOptions } from '@react-navigation/native';
import { RouteNode } from '../src/Route';
import { RouterStore } from '../src/global-state/router-store';
import { getInitialURL, getPathFromState, getStateFromPath } from '../src/link/linking';
import { RequireContext } from '../src/types';
export declare function getNavigationConfig(routes: RouteNode, metaOnly?: boolean): {
    initialRouteName: undefined;
    screens: Record<string, import("../src/getReactNavigationConfig").Screen>;
};
export type ExpoLinkingOptions<T extends object = Record<string, unknown>> = LinkingOptions<T> & {
    getPathFromState?: typeof getPathFromState;
    getStateFromPath?: typeof getStateFromPath;
};
export type LinkingConfigOptions = {
    metaOnly?: boolean;
    serverUrl?: string;
    getInitialURL?: typeof getInitialURL;
};
export declare function getLinkingConfig(store: RouterStore, routes: RouteNode, context: RequireContext, { metaOnly, serverUrl }?: LinkingConfigOptions): ExpoLinkingOptions;
//# sourceMappingURL=getLinkingConfig.d.ts.map
import React, { ReactNode } from 'react';
import type { ErrorBoundaryProps } from '../src/exports';
import { sortRoutesWithInitial, sortRoutes } from '../src/sortRoutes';
export type DynamicConvention = {
    name: string;
    deep: boolean;
    notFound?: boolean;
};
export type LoadedRoute = {
    ErrorBoundary?: React.ComponentType<ErrorBoundaryProps>;
    default?: React.ComponentType<any>;
    unstable_settings?: Record<string, any>;
    getNavOptions?: (args: any) => any;
    generateStaticParams?: (props: {
        params?: Record<string, string | string[]>;
    }) => Record<string, string | string[]>[];
};
export type RouteNode = {
    /** The type of RouteNode */
    type: 'route' | 'api' | 'layout';
    /** Load a route into memory. Returns the exports from a route. */
    loadRoute: () => Partial<LoadedRoute>;
    /** Loaded initial route name. */
    initialRouteName?: string;
    /** nested routes */
    children: RouteNode[];
    /** Is the route a dynamic path */
    dynamic: null | DynamicConvention[];
    /** `index`, `error-boundary`, etc. */
    route: string;
    /** Context Module ID, used for matching children. */
    contextKey: string;
    /** Added in-memory */
    generated?: boolean;
    /** Internal screens like the directory or the auto 404 should be marked as internal. */
    internal?: boolean;
    /** File paths for async entry modules that should be included in the initial chunk request to ensure the runtime JavaScript matches the statically rendered HTML representation. */
    entryPoints?: string[];
};
export declare const LocalRouteParamsContext: React.Context<Record<string, string | undefined> | undefined>;
/** Return the RouteNode at the current contextual boundary. */
export declare function useRouteNode(): RouteNode | null;
export declare function useContextKey(): string;
/** Provides the matching routes and filename to the children. */
export declare function Route({ children, node, route, }: {
    children: ReactNode;
    node: RouteNode;
    route?: {
        params: Record<string, string | undefined>;
    };
}): React.JSX.Element;
export { sortRoutesWithInitial, sortRoutes };
//# sourceMappingURL=Route.d.ts.map
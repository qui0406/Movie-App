/**
 * Copyright © 2024 650 Industries.
 * Copyright © 2024 2023 Daishi Kato
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * https://github.com/dai-shi/waku/blob/3d1cc7d714b67b142c847e879c30f0724fc457a7/packages/waku/src/router/client.ts#L1
 */
import type { ReactNode, AnchorHTMLAttributes } from 'react';
import type { RouteProps } from '../../../src/rsc/router/common.js';
import type { Router as ClassicExpoRouterType } from '../../../src/imperative-api.js';
import type { LinkProps as ClassicLinkProps, LinkComponent } from '../../../src/link/Link.js';
import type { Href } from '../../../src/types.js';
export declare function useRouter_UNSTABLE(): ClassicExpoRouterType & RouteProps & {
    forward: () => void;
    prefetch: (href: Href) => void;
};
type ShouldSkip = (readonly [
    string,
    readonly [
        boolean,
        string[]
    ]
])[];
type RouterData = [
    shouldSkip?: ShouldSkip,
    locationListeners?: Set<(path: string, query: string) => void>
];
export declare function Router({ routerData }: {
    routerData?: RouterData | undefined;
}): import("react").FunctionComponentElement<Omit<{
    initialInput?: string | undefined;
    initialParams?: unknown;
    fetchCache?: {
        e?: [input: string, params: unknown, elements: Promise<Record<string, ReactNode>> & {
            prev?: Record<string, ReactNode> | undefined;
        }] | undefined;
        s?: ((updater: (Promise<Record<string, ReactNode>> & {
            prev?: Record<string, ReactNode> | undefined;
        }) | ((prev: Promise<Record<string, ReactNode>> & {
            prev?: Record<string, ReactNode> | undefined;
        }) => Promise<Record<string, ReactNode>> & {
            prev?: Record<string, ReactNode> | undefined;
        })) => void) | undefined;
        o?: ((data: unknown) => void) | undefined;
    } | undefined;
    unstable_onFetchData?: ((data: unknown) => void) | undefined;
    children: ReactNode;
}, "children">>;
/**
 * ServerRouter for SSR
 * This is not a public API.
 */
export declare function ServerRouter({ children, route }: {
    children: ReactNode;
    route: RouteProps;
}): import("react").FunctionComponentElement<{
    children?: ReactNode;
}>;
export type LinkProps = ClassicLinkProps & {
    href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;
export declare const Link: LinkComponent;
export {};
//# sourceMappingURL=client.d.ts.map
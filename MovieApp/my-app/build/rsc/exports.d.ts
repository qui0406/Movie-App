/// <reference types="react" />
import type { Href } from '../../src/types';
import { useRouter_UNSTABLE } from '../../src/rsc/router/client';
export { Link } from '../../src/rsc/router/client';
export declare function usePathname(): string;
export declare function useLocalSearchParams(): {
    [k: string]: string;
};
export declare function useGlobalSearchParams(): {
    [k: string]: string;
};
export declare function Slot(): import("react").JSX.Element;
export declare function Stack(): import("react").JSX.Element;
export declare function Tabs(): import("react").JSX.Element;
export declare function Navigator(): void;
/**
 * Redirects to the `href` as soon as the component is mounted.
 */
export declare function Redirect({ href }: {
    href: Href;
}): null;
export declare function ExpoRoot(): void;
export declare function useFocusEffect(): void;
export declare function useNavigation(): void;
export declare function withLayoutContext(): void;
export declare function useNavigationContainerRef(): void;
export declare function useSegments(): void;
export declare function useRootNavigation(): void;
export declare function useRootNavigationState(): void;
export declare function useUnstableGlobalHref(): void;
export { useRouter_UNSTABLE as useRouter };
export { Unmatched } from '../../src/views/Unmatched';
export { ErrorBoundaryProps } from '../../src/views/Try';
export { ErrorBoundary } from '../../src/views/ErrorBoundary';
export declare const router: {};
//# sourceMappingURL=exports.d.ts.map
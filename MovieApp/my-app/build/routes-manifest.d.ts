import { Options } from '../src/getRoutesSSR';
export { Options } from '../src/getRoutes';
export type RouteInfo<TRegex = string> = {
    file: string;
    page: string;
    namedRegex: TRegex;
    routeKeys: Record<string, string>;
};
export type ExpoRoutesManifestV1<TRegex = string> = {
    apiRoutes: RouteInfo<TRegex>[];
    htmlRoutes: RouteInfo<TRegex>[];
    notFoundRoutes: RouteInfo<TRegex>[];
};
export declare function createRoutesManifest(paths: string[], options: Options): ExpoRoutesManifestV1 | null;
//# sourceMappingURL=routes-manifest.d.ts.map
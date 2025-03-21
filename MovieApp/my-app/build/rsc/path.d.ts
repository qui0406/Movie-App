/**
 * Copyright © 2024 650 Industries.
 * Copyright © 2024 2023 Daishi Kato
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * https://github.com/dai-shi/waku/blob/32d52242c1450b5f5965860e671ff73c42da8bd0/packages/waku/src/lib/utils/path.ts#L1
 */
export declare const encodeFilePathToAbsolute: (filePath: string) => string;
export declare const decodeFilePathFromAbsolute: (filePath: string) => string;
export declare const filePathToFileURL: (filePath: string) => string;
/** Return the original "osPath" based on the file URL */
export declare const fileURLToFilePath: (fileURL: string) => string;
export declare const joinPath: (...paths: string[]) => string;
export declare const extname: (filePath: string) => string;
export type PathSpecItem = {
    type: 'literal';
    name: string;
} | {
    type: 'group';
    name?: string;
} | {
    type: 'wildcard';
    name?: string;
};
export type PathSpec = readonly PathSpecItem[];
export declare const parsePathWithSlug: (path: string) => PathSpec;
export declare const getPathMapping: (pathSpec: PathSpec, pathname: string) => Record<string, string | string[]> | null;
/**
 * Transform a path spec to a regular expression.
 */
export declare const path2regexp: (path: PathSpec) => string;
//# sourceMappingURL=path.d.ts.map
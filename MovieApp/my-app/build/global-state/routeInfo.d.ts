import { State } from '../../src/fork/getPathFromState';
import { getStateFromPath } from '../../src/fork/getStateFromPath';
type Options = Parameters<typeof getStateFromPath>[1];
export declare function reconstructState(state: State | undefined, getState: typeof getStateFromPath, options: Options): import("../../src/fork/getStateFromPath").ResultState | undefined;
export {};
//# sourceMappingURL=routeInfo.d.ts.map
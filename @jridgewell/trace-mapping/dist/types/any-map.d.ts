import { TraceMap } from './trace-mapping';
import type { SectionedSourceMapInput } from './types';
type AnyMap = {
    new (map: SectionedSourceMapInput, mapUrl?: string | null): TraceMap;
    (map: SectionedSourceMapInput, mapUrl?: string | null): TraceMap;
};
export declare const AnyMap: AnyMap;
export {};

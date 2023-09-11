import { z } from 'zod';
export declare const ITiledMapInfiniteTileLayer: z.ZodObject<{
    chunks: z.ZodArray<z.ZodObject<{
        data: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodNumber, "many">]>;
        height: z.ZodNumber;
        width: z.ZodNumber;
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        data: string | number[];
        height: number;
        width: number;
        x: number;
        y: number;
    }, {
        data: string | number[];
        height: number;
        width: number;
        x: number;
        y: number;
    }>, "many">;
    id: z.ZodNumber;
    type: z.ZodLiteral<"tilelayer">;
    name: z.ZodString;
    startx: z.ZodNumber;
    starty: z.ZodNumber;
    x: z.ZodOptional<z.ZodNumber>;
    y: z.ZodOptional<z.ZodNumber>;
    width: z.ZodNumber;
    height: z.ZodNumber;
    opacity: z.ZodNumber;
    visible: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    x?: number | undefined;
    y?: number | undefined;
    type: "tilelayer";
    name: string;
    height: number;
    width: number;
    chunks: {
        data: string | number[];
        height: number;
        width: number;
        x: number;
        y: number;
    }[];
    id: number;
    startx: number;
    starty: number;
    opacity: number;
    visible: boolean;
}, {
    x?: number | undefined;
    y?: number | undefined;
    type: "tilelayer";
    name: string;
    height: number;
    width: number;
    chunks: {
        data: string | number[];
        height: number;
        width: number;
        x: number;
        y: number;
    }[];
    id: number;
    startx: number;
    starty: number;
    opacity: number;
    visible: boolean;
}>;
export declare const ITiledMapRestrictedTileLayer: z.ZodObject<{
    data: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodNumber, "many">]>;
    height: z.ZodNumber;
    id: z.ZodNumber;
    name: z.ZodString;
    opacity: z.ZodNumber;
    type: z.ZodLiteral<"tilelayer">;
    visible: z.ZodBoolean;
    width: z.ZodNumber;
    chunks: z.ZodOptional<z.ZodArray<z.ZodObject<{
        data: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodNumber, "many">]>;
        height: z.ZodNumber;
        width: z.ZodNumber;
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        data: string | number[];
        height: number;
        width: number;
        x: number;
        y: number;
    }, {
        data: string | number[];
        height: number;
        width: number;
        x: number;
        y: number;
    }>, "many">>;
    compression: z.ZodOptional<z.ZodString>;
    encoding: z.ZodOptional<z.ZodEnum<["csv", "base64"]>>;
    offsetx: z.ZodOptional<z.ZodNumber>;
    offsety: z.ZodOptional<z.ZodNumber>;
    parallaxx: z.ZodOptional<z.ZodNumber>;
    parallaxy: z.ZodOptional<z.ZodNumber>;
    properties: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<[z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
        value: z.ZodOptional<z.ZodString>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        value?: string | undefined;
        propertytype?: string | undefined;
        type: "string" | "color" | "file";
        name: string;
    }, {
        value?: string | undefined;
        propertytype?: string | undefined;
        type: "string" | "color" | "file";
        name: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<[z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        value?: number | undefined;
        propertytype?: string | undefined;
        type: "object" | "int";
        name: string;
    }, {
        value?: number | undefined;
        propertytype?: string | undefined;
        type: "object" | "int";
        name: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        value?: number | undefined;
        propertytype?: string | undefined;
        type: "float";
        name: string;
    }, {
        value?: number | undefined;
        propertytype?: string | undefined;
        type: "float";
        name: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodOptional<z.ZodBoolean>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        value?: boolean | undefined;
        propertytype?: string | undefined;
        type: "bool";
        name: string;
    }, {
        value?: boolean | undefined;
        propertytype?: string | undefined;
        type: "bool";
        name: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"class">;
        value: z.ZodOptional<z.ZodType<import("./ITiledMapProperty").Json, z.ZodTypeDef, import("./ITiledMapProperty").Json>>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        value?: import("./ITiledMapProperty").Json | undefined;
        propertytype?: string | undefined;
        type: "class";
        name: string;
    }, {
        value?: import("./ITiledMapProperty").Json | undefined;
        propertytype?: string | undefined;
        type: "class";
        name: string;
    }>]>, "many">>;
    startx: z.ZodOptional<z.ZodNumber>;
    starty: z.ZodOptional<z.ZodNumber>;
    tintcolor: z.ZodOptional<z.ZodString>;
    class: z.ZodOptional<z.ZodString>;
    x: z.ZodOptional<z.ZodNumber>;
    y: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    class?: string | undefined;
    x?: number | undefined;
    y?: number | undefined;
    chunks?: {
        data: string | number[];
        height: number;
        width: number;
        x: number;
        y: number;
    }[] | undefined;
    startx?: number | undefined;
    starty?: number | undefined;
    compression?: string | undefined;
    encoding?: "csv" | "base64" | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    properties?: ({
        value?: string | undefined;
        propertytype?: string | undefined;
        type: "string" | "color" | "file";
        name: string;
    } | {
        value?: number | undefined;
        propertytype?: string | undefined;
        type: "object" | "int";
        name: string;
    } | {
        value?: number | undefined;
        propertytype?: string | undefined;
        type: "float";
        name: string;
    } | {
        value?: boolean | undefined;
        propertytype?: string | undefined;
        type: "bool";
        name: string;
    } | {
        value?: import("./ITiledMapProperty").Json | undefined;
        propertytype?: string | undefined;
        type: "class";
        name: string;
    })[] | undefined;
    tintcolor?: string | undefined;
    type: "tilelayer";
    name: string;
    data: string | number[];
    height: number;
    width: number;
    id: number;
    opacity: number;
    visible: boolean;
}, {
    class?: string | undefined;
    x?: number | undefined;
    y?: number | undefined;
    chunks?: {
        data: string | number[];
        height: number;
        width: number;
        x: number;
        y: number;
    }[] | undefined;
    startx?: number | undefined;
    starty?: number | undefined;
    compression?: string | undefined;
    encoding?: "csv" | "base64" | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    properties?: ({
        value?: string | undefined;
        propertytype?: string | undefined;
        type: "string" | "color" | "file";
        name: string;
    } | {
        value?: number | undefined;
        propertytype?: string | undefined;
        type: "object" | "int";
        name: string;
    } | {
        value?: number | undefined;
        propertytype?: string | undefined;
        type: "float";
        name: string;
    } | {
        value?: boolean | undefined;
        propertytype?: string | undefined;
        type: "bool";
        name: string;
    } | {
        value?: import("./ITiledMapProperty").Json | undefined;
        propertytype?: string | undefined;
        type: "class";
        name: string;
    })[] | undefined;
    tintcolor?: string | undefined;
    type: "tilelayer";
    name: string;
    data: string | number[];
    height: number;
    width: number;
    id: number;
    opacity: number;
    visible: boolean;
}>;
export declare const ITiledMapTileLayer: z.ZodUnion<[z.ZodObject<{
    chunks: z.ZodArray<z.ZodObject<{
        data: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodNumber, "many">]>;
        height: z.ZodNumber;
        width: z.ZodNumber;
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        data: string | number[];
        height: number;
        width: number;
        x: number;
        y: number;
    }, {
        data: string | number[];
        height: number;
        width: number;
        x: number;
        y: number;
    }>, "many">;
    id: z.ZodNumber;
    type: z.ZodLiteral<"tilelayer">;
    name: z.ZodString;
    startx: z.ZodNumber;
    starty: z.ZodNumber;
    x: z.ZodOptional<z.ZodNumber>;
    y: z.ZodOptional<z.ZodNumber>;
    width: z.ZodNumber;
    height: z.ZodNumber;
    opacity: z.ZodNumber;
    visible: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    x?: number | undefined;
    y?: number | undefined;
    type: "tilelayer";
    name: string;
    height: number;
    width: number;
    chunks: {
        data: string | number[];
        height: number;
        width: number;
        x: number;
        y: number;
    }[];
    id: number;
    startx: number;
    starty: number;
    opacity: number;
    visible: boolean;
}, {
    x?: number | undefined;
    y?: number | undefined;
    type: "tilelayer";
    name: string;
    height: number;
    width: number;
    chunks: {
        data: string | number[];
        height: number;
        width: number;
        x: number;
        y: number;
    }[];
    id: number;
    startx: number;
    starty: number;
    opacity: number;
    visible: boolean;
}>, z.ZodObject<{
    data: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodNumber, "many">]>;
    height: z.ZodNumber;
    id: z.ZodNumber;
    name: z.ZodString;
    opacity: z.ZodNumber;
    type: z.ZodLiteral<"tilelayer">;
    visible: z.ZodBoolean;
    width: z.ZodNumber;
    chunks: z.ZodOptional<z.ZodArray<z.ZodObject<{
        data: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodNumber, "many">]>;
        height: z.ZodNumber;
        width: z.ZodNumber;
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        data: string | number[];
        height: number;
        width: number;
        x: number;
        y: number;
    }, {
        data: string | number[];
        height: number;
        width: number;
        x: number;
        y: number;
    }>, "many">>;
    compression: z.ZodOptional<z.ZodString>;
    encoding: z.ZodOptional<z.ZodEnum<["csv", "base64"]>>;
    offsetx: z.ZodOptional<z.ZodNumber>;
    offsety: z.ZodOptional<z.ZodNumber>;
    parallaxx: z.ZodOptional<z.ZodNumber>;
    parallaxy: z.ZodOptional<z.ZodNumber>;
    properties: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<[z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
        value: z.ZodOptional<z.ZodString>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        value?: string | undefined;
        propertytype?: string | undefined;
        type: "string" | "color" | "file";
        name: string;
    }, {
        value?: string | undefined;
        propertytype?: string | undefined;
        type: "string" | "color" | "file";
        name: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<[z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        value?: number | undefined;
        propertytype?: string | undefined;
        type: "object" | "int";
        name: string;
    }, {
        value?: number | undefined;
        propertytype?: string | undefined;
        type: "object" | "int";
        name: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        value?: number | undefined;
        propertytype?: string | undefined;
        type: "float";
        name: string;
    }, {
        value?: number | undefined;
        propertytype?: string | undefined;
        type: "float";
        name: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodOptional<z.ZodBoolean>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        value?: boolean | undefined;
        propertytype?: string | undefined;
        type: "bool";
        name: string;
    }, {
        value?: boolean | undefined;
        propertytype?: string | undefined;
        type: "bool";
        name: string;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"class">;
        value: z.ZodOptional<z.ZodType<import("./ITiledMapProperty").Json, z.ZodTypeDef, import("./ITiledMapProperty").Json>>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        value?: import("./ITiledMapProperty").Json | undefined;
        propertytype?: string | undefined;
        type: "class";
        name: string;
    }, {
        value?: import("./ITiledMapProperty").Json | undefined;
        propertytype?: string | undefined;
        type: "class";
        name: string;
    }>]>, "many">>;
    startx: z.ZodOptional<z.ZodNumber>;
    starty: z.ZodOptional<z.ZodNumber>;
    tintcolor: z.ZodOptional<z.ZodString>;
    class: z.ZodOptional<z.ZodString>;
    x: z.ZodOptional<z.ZodNumber>;
    y: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    class?: string | undefined;
    x?: number | undefined;
    y?: number | undefined;
    chunks?: {
        data: string | number[];
        height: number;
        width: number;
        x: number;
        y: number;
    }[] | undefined;
    startx?: number | undefined;
    starty?: number | undefined;
    compression?: string | undefined;
    encoding?: "csv" | "base64" | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    properties?: ({
        value?: string | undefined;
        propertytype?: string | undefined;
        type: "string" | "color" | "file";
        name: string;
    } | {
        value?: number | undefined;
        propertytype?: string | undefined;
        type: "object" | "int";
        name: string;
    } | {
        value?: number | undefined;
        propertytype?: string | undefined;
        type: "float";
        name: string;
    } | {
        value?: boolean | undefined;
        propertytype?: string | undefined;
        type: "bool";
        name: string;
    } | {
        value?: import("./ITiledMapProperty").Json | undefined;
        propertytype?: string | undefined;
        type: "class";
        name: string;
    })[] | undefined;
    tintcolor?: string | undefined;
    type: "tilelayer";
    name: string;
    data: string | number[];
    height: number;
    width: number;
    id: number;
    opacity: number;
    visible: boolean;
}, {
    class?: string | undefined;
    x?: number | undefined;
    y?: number | undefined;
    chunks?: {
        data: string | number[];
        height: number;
        width: number;
        x: number;
        y: number;
    }[] | undefined;
    startx?: number | undefined;
    starty?: number | undefined;
    compression?: string | undefined;
    encoding?: "csv" | "base64" | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
    parallaxx?: number | undefined;
    parallaxy?: number | undefined;
    properties?: ({
        value?: string | undefined;
        propertytype?: string | undefined;
        type: "string" | "color" | "file";
        name: string;
    } | {
        value?: number | undefined;
        propertytype?: string | undefined;
        type: "object" | "int";
        name: string;
    } | {
        value?: number | undefined;
        propertytype?: string | undefined;
        type: "float";
        name: string;
    } | {
        value?: boolean | undefined;
        propertytype?: string | undefined;
        type: "bool";
        name: string;
    } | {
        value?: import("./ITiledMapProperty").Json | undefined;
        propertytype?: string | undefined;
        type: "class";
        name: string;
    })[] | undefined;
    tintcolor?: string | undefined;
    type: "tilelayer";
    name: string;
    data: string | number[];
    height: number;
    width: number;
    id: number;
    opacity: number;
    visible: boolean;
}>]>;
export declare type ITiledMapTileLayer = z.infer<typeof ITiledMapTileLayer>;

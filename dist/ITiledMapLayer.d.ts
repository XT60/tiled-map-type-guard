import { z } from 'zod';
export declare const ITiledMapLayer: z.ZodUnion<[z.ZodUnion<[z.ZodObject<{
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
}>]>, z.ZodObject<{
    name: z.ZodString;
    objects: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
        visible: z.ZodBoolean;
        x: z.ZodNumber;
        y: z.ZodNumber;
        ellipse: z.ZodOptional<z.ZodBoolean>;
        gid: z.ZodOptional<z.ZodNumber>;
        height: z.ZodOptional<z.ZodNumber>;
        point: z.ZodOptional<z.ZodBoolean>;
        polygon: z.ZodOptional<z.ZodArray<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>, "many">>;
        polyline: z.ZodOptional<z.ZodArray<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>, "many">>;
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
        rotation: z.ZodOptional<z.ZodNumber>;
        template: z.ZodOptional<z.ZodString>;
        text: z.ZodOptional<z.ZodObject<{
            text: z.ZodString;
            bold: z.ZodOptional<z.ZodBoolean>;
            color: z.ZodOptional<z.ZodString>;
            fontfamily: z.ZodOptional<z.ZodString>;
            halign: z.ZodOptional<z.ZodEnum<["center", "right", "justify", "left"]>>;
            italic: z.ZodOptional<z.ZodBoolean>;
            kerning: z.ZodOptional<z.ZodBoolean>;
            pixelsize: z.ZodOptional<z.ZodNumber>;
            strikeout: z.ZodOptional<z.ZodBoolean>;
            underline: z.ZodOptional<z.ZodBoolean>;
            valign: z.ZodOptional<z.ZodEnum<["center", "bottom", "top"]>>;
            wrap: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            color?: string | undefined;
            bold?: boolean | undefined;
            fontfamily?: string | undefined;
            halign?: "center" | "right" | "justify" | "left" | undefined;
            italic?: boolean | undefined;
            kerning?: boolean | undefined;
            pixelsize?: number | undefined;
            strikeout?: boolean | undefined;
            underline?: boolean | undefined;
            valign?: "center" | "bottom" | "top" | undefined;
            wrap?: boolean | undefined;
            text: string;
        }, {
            color?: string | undefined;
            bold?: boolean | undefined;
            fontfamily?: string | undefined;
            halign?: "center" | "right" | "justify" | "left" | undefined;
            italic?: boolean | undefined;
            kerning?: boolean | undefined;
            pixelsize?: number | undefined;
            strikeout?: boolean | undefined;
            underline?: boolean | undefined;
            valign?: "center" | "bottom" | "top" | undefined;
            wrap?: boolean | undefined;
            text: string;
        }>>;
        type: z.ZodOptional<z.ZodString>;
        class: z.ZodOptional<z.ZodString>;
        width: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type?: string | undefined;
        class?: string | undefined;
        height?: number | undefined;
        width?: number | undefined;
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
        text?: {
            color?: string | undefined;
            bold?: boolean | undefined;
            fontfamily?: string | undefined;
            halign?: "center" | "right" | "justify" | "left" | undefined;
            italic?: boolean | undefined;
            kerning?: boolean | undefined;
            pixelsize?: number | undefined;
            strikeout?: boolean | undefined;
            underline?: boolean | undefined;
            valign?: "center" | "bottom" | "top" | undefined;
            wrap?: boolean | undefined;
            text: string;
        } | undefined;
        ellipse?: boolean | undefined;
        gid?: number | undefined;
        point?: boolean | undefined;
        polygon?: {
            x: number;
            y: number;
        }[] | undefined;
        polyline?: {
            x: number;
            y: number;
        }[] | undefined;
        rotation?: number | undefined;
        template?: string | undefined;
        name: string;
        x: number;
        y: number;
        id: number;
        visible: boolean;
    }, {
        type?: string | undefined;
        class?: string | undefined;
        height?: number | undefined;
        width?: number | undefined;
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
        text?: {
            color?: string | undefined;
            bold?: boolean | undefined;
            fontfamily?: string | undefined;
            halign?: "center" | "right" | "justify" | "left" | undefined;
            italic?: boolean | undefined;
            kerning?: boolean | undefined;
            pixelsize?: number | undefined;
            strikeout?: boolean | undefined;
            underline?: boolean | undefined;
            valign?: "center" | "bottom" | "top" | undefined;
            wrap?: boolean | undefined;
            text: string;
        } | undefined;
        ellipse?: boolean | undefined;
        gid?: number | undefined;
        point?: boolean | undefined;
        polygon?: {
            x: number;
            y: number;
        }[] | undefined;
        polyline?: {
            x: number;
            y: number;
        }[] | undefined;
        rotation?: number | undefined;
        template?: string | undefined;
        name: string;
        x: number;
        y: number;
        id: number;
        visible: boolean;
    }>, "many">;
    opacity: z.ZodNumber;
    type: z.ZodLiteral<"objectgroup">;
    visible: z.ZodBoolean;
    draworder: z.ZodOptional<z.ZodString>;
    height: z.ZodOptional<z.ZodNumber>;
    id: z.ZodOptional<z.ZodNumber>;
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
    width: z.ZodOptional<z.ZodNumber>;
    class: z.ZodOptional<z.ZodString>;
    x: z.ZodOptional<z.ZodNumber>;
    y: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    class?: string | undefined;
    height?: number | undefined;
    width?: number | undefined;
    x?: number | undefined;
    y?: number | undefined;
    id?: number | undefined;
    startx?: number | undefined;
    starty?: number | undefined;
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
    draworder?: string | undefined;
    type: "objectgroup";
    name: string;
    opacity: number;
    visible: boolean;
    objects: {
        type?: string | undefined;
        class?: string | undefined;
        height?: number | undefined;
        width?: number | undefined;
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
        text?: {
            color?: string | undefined;
            bold?: boolean | undefined;
            fontfamily?: string | undefined;
            halign?: "center" | "right" | "justify" | "left" | undefined;
            italic?: boolean | undefined;
            kerning?: boolean | undefined;
            pixelsize?: number | undefined;
            strikeout?: boolean | undefined;
            underline?: boolean | undefined;
            valign?: "center" | "bottom" | "top" | undefined;
            wrap?: boolean | undefined;
            text: string;
        } | undefined;
        ellipse?: boolean | undefined;
        gid?: number | undefined;
        point?: boolean | undefined;
        polygon?: {
            x: number;
            y: number;
        }[] | undefined;
        polyline?: {
            x: number;
            y: number;
        }[] | undefined;
        rotation?: number | undefined;
        template?: string | undefined;
        name: string;
        x: number;
        y: number;
        id: number;
        visible: boolean;
    }[];
}, {
    class?: string | undefined;
    height?: number | undefined;
    width?: number | undefined;
    x?: number | undefined;
    y?: number | undefined;
    id?: number | undefined;
    startx?: number | undefined;
    starty?: number | undefined;
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
    draworder?: string | undefined;
    type: "objectgroup";
    name: string;
    opacity: number;
    visible: boolean;
    objects: {
        type?: string | undefined;
        class?: string | undefined;
        height?: number | undefined;
        width?: number | undefined;
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
        text?: {
            color?: string | undefined;
            bold?: boolean | undefined;
            fontfamily?: string | undefined;
            halign?: "center" | "right" | "justify" | "left" | undefined;
            italic?: boolean | undefined;
            kerning?: boolean | undefined;
            pixelsize?: number | undefined;
            strikeout?: boolean | undefined;
            underline?: boolean | undefined;
            valign?: "center" | "bottom" | "top" | undefined;
            wrap?: boolean | undefined;
            text: string;
        } | undefined;
        ellipse?: boolean | undefined;
        gid?: number | undefined;
        point?: boolean | undefined;
        polygon?: {
            x: number;
            y: number;
        }[] | undefined;
        polyline?: {
            x: number;
            y: number;
        }[] | undefined;
        rotation?: number | undefined;
        template?: string | undefined;
        name: string;
        x: number;
        y: number;
        id: number;
        visible: boolean;
    }[];
}>]>;
export declare type ITiledMapLayer = z.infer<typeof ITiledMapLayer>;

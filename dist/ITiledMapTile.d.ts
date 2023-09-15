import { z } from 'zod';
export declare const ITiledMapTile: z.ZodObject<{
    id: z.ZodNumber;
    animation: z.ZodOptional<z.ZodArray<z.ZodObject<{
        duration: z.ZodNumber;
        tileid: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        duration: number;
        tileid: number;
    }, {
        duration: number;
        tileid: number;
    }>, "many">>;
    image: z.ZodOptional<z.ZodString>;
    imageheight: z.ZodOptional<z.ZodNumber>;
    imagewidth: z.ZodOptional<z.ZodNumber>;
    x: z.ZodOptional<z.ZodNumber>;
    y: z.ZodOptional<z.ZodNumber>;
    width: z.ZodOptional<z.ZodNumber>;
    height: z.ZodOptional<z.ZodNumber>;
    objectgroup: z.ZodOptional<z.ZodObject<{
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
                type: "string" | "color" | "file";
                name: string;
                value?: string | undefined;
                propertytype?: string | undefined;
            }, {
                type: "string" | "color" | "file";
                name: string;
                value?: string | undefined;
                propertytype?: string | undefined;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodUnion<[z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                type: "object" | "int";
                name: string;
                value?: number | undefined;
                propertytype?: string | undefined;
            }, {
                type: "object" | "int";
                name: string;
                value?: number | undefined;
                propertytype?: string | undefined;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"float">;
                value: z.ZodOptional<z.ZodNumber>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                type: "float";
                name: string;
                value?: number | undefined;
                propertytype?: string | undefined;
            }, {
                type: "float";
                name: string;
                value?: number | undefined;
                propertytype?: string | undefined;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"bool">;
                value: z.ZodOptional<z.ZodBoolean>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                type: "bool";
                name: string;
                value?: boolean | undefined;
                propertytype?: string | undefined;
            }, {
                type: "bool";
                name: string;
                value?: boolean | undefined;
                propertytype?: string | undefined;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodLiteral<"class">;
                value: z.ZodOptional<z.ZodType<import("./ITiledMapProperty").Json, z.ZodTypeDef, import("./ITiledMapProperty").Json>>;
                propertytype: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                type: "class";
                name: string;
                value?: import("./ITiledMapProperty").Json | undefined;
                propertytype?: string | undefined;
            }, {
                type: "class";
                name: string;
                value?: import("./ITiledMapProperty").Json | undefined;
                propertytype?: string | undefined;
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
                text: string;
                bold?: boolean | undefined;
                color?: string | undefined;
                fontfamily?: string | undefined;
                halign?: "center" | "right" | "justify" | "left" | undefined;
                italic?: boolean | undefined;
                kerning?: boolean | undefined;
                pixelsize?: number | undefined;
                strikeout?: boolean | undefined;
                underline?: boolean | undefined;
                valign?: "center" | "bottom" | "top" | undefined;
                wrap?: boolean | undefined;
            }, {
                text: string;
                bold?: boolean | undefined;
                color?: string | undefined;
                fontfamily?: string | undefined;
                halign?: "center" | "right" | "justify" | "left" | undefined;
                italic?: boolean | undefined;
                kerning?: boolean | undefined;
                pixelsize?: number | undefined;
                strikeout?: boolean | undefined;
                underline?: boolean | undefined;
                valign?: "center" | "bottom" | "top" | undefined;
                wrap?: boolean | undefined;
            }>>;
            type: z.ZodOptional<z.ZodString>;
            class: z.ZodOptional<z.ZodString>;
            width: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            x: number;
            y: number;
            id: number;
            visible: boolean;
            ellipse?: boolean | undefined;
            gid?: number | undefined;
            height?: number | undefined;
            point?: boolean | undefined;
            polygon?: {
                x: number;
                y: number;
            }[] | undefined;
            polyline?: {
                x: number;
                y: number;
            }[] | undefined;
            properties?: ({
                type: "string" | "color" | "file";
                name: string;
                value?: string | undefined;
                propertytype?: string | undefined;
            } | {
                type: "object" | "int";
                name: string;
                value?: number | undefined;
                propertytype?: string | undefined;
            } | {
                type: "float";
                name: string;
                value?: number | undefined;
                propertytype?: string | undefined;
            } | {
                type: "bool";
                name: string;
                value?: boolean | undefined;
                propertytype?: string | undefined;
            } | {
                type: "class";
                name: string;
                value?: import("./ITiledMapProperty").Json | undefined;
                propertytype?: string | undefined;
            })[] | undefined;
            rotation?: number | undefined;
            template?: string | undefined;
            text?: {
                text: string;
                bold?: boolean | undefined;
                color?: string | undefined;
                fontfamily?: string | undefined;
                halign?: "center" | "right" | "justify" | "left" | undefined;
                italic?: boolean | undefined;
                kerning?: boolean | undefined;
                pixelsize?: number | undefined;
                strikeout?: boolean | undefined;
                underline?: boolean | undefined;
                valign?: "center" | "bottom" | "top" | undefined;
                wrap?: boolean | undefined;
            } | undefined;
            type?: string | undefined;
            class?: string | undefined;
            width?: number | undefined;
        }, {
            name: string;
            x: number;
            y: number;
            id: number;
            visible: boolean;
            ellipse?: boolean | undefined;
            gid?: number | undefined;
            height?: number | undefined;
            point?: boolean | undefined;
            polygon?: {
                x: number;
                y: number;
            }[] | undefined;
            polyline?: {
                x: number;
                y: number;
            }[] | undefined;
            properties?: ({
                type: "string" | "color" | "file";
                name: string;
                value?: string | undefined;
                propertytype?: string | undefined;
            } | {
                type: "object" | "int";
                name: string;
                value?: number | undefined;
                propertytype?: string | undefined;
            } | {
                type: "float";
                name: string;
                value?: number | undefined;
                propertytype?: string | undefined;
            } | {
                type: "bool";
                name: string;
                value?: boolean | undefined;
                propertytype?: string | undefined;
            } | {
                type: "class";
                name: string;
                value?: import("./ITiledMapProperty").Json | undefined;
                propertytype?: string | undefined;
            })[] | undefined;
            rotation?: number | undefined;
            template?: string | undefined;
            text?: {
                text: string;
                bold?: boolean | undefined;
                color?: string | undefined;
                fontfamily?: string | undefined;
                halign?: "center" | "right" | "justify" | "left" | undefined;
                italic?: boolean | undefined;
                kerning?: boolean | undefined;
                pixelsize?: number | undefined;
                strikeout?: boolean | undefined;
                underline?: boolean | undefined;
                valign?: "center" | "bottom" | "top" | undefined;
                wrap?: boolean | undefined;
            } | undefined;
            type?: string | undefined;
            class?: string | undefined;
            width?: number | undefined;
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
            type: "string" | "color" | "file";
            name: string;
            value?: string | undefined;
            propertytype?: string | undefined;
        }, {
            type: "string" | "color" | "file";
            name: string;
            value?: string | undefined;
            propertytype?: string | undefined;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<[z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "object" | "int";
            name: string;
            value?: number | undefined;
            propertytype?: string | undefined;
        }, {
            type: "object" | "int";
            name: string;
            value?: number | undefined;
            propertytype?: string | undefined;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "float";
            name: string;
            value?: number | undefined;
            propertytype?: string | undefined;
        }, {
            type: "float";
            name: string;
            value?: number | undefined;
            propertytype?: string | undefined;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodOptional<z.ZodBoolean>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "bool";
            name: string;
            value?: boolean | undefined;
            propertytype?: string | undefined;
        }, {
            type: "bool";
            name: string;
            value?: boolean | undefined;
            propertytype?: string | undefined;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"class">;
            value: z.ZodOptional<z.ZodType<import("./ITiledMapProperty").Json, z.ZodTypeDef, import("./ITiledMapProperty").Json>>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "class";
            name: string;
            value?: import("./ITiledMapProperty").Json | undefined;
            propertytype?: string | undefined;
        }, {
            type: "class";
            name: string;
            value?: import("./ITiledMapProperty").Json | undefined;
            propertytype?: string | undefined;
        }>]>, "many">>;
        startx: z.ZodOptional<z.ZodNumber>;
        starty: z.ZodOptional<z.ZodNumber>;
        tintcolor: z.ZodOptional<z.ZodString>;
        width: z.ZodOptional<z.ZodNumber>;
        class: z.ZodOptional<z.ZodString>;
        x: z.ZodOptional<z.ZodNumber>;
        y: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "objectgroup";
        name: string;
        opacity: number;
        visible: boolean;
        objects: {
            name: string;
            x: number;
            y: number;
            id: number;
            visible: boolean;
            ellipse?: boolean | undefined;
            gid?: number | undefined;
            height?: number | undefined;
            point?: boolean | undefined;
            polygon?: {
                x: number;
                y: number;
            }[] | undefined;
            polyline?: {
                x: number;
                y: number;
            }[] | undefined;
            properties?: ({
                type: "string" | "color" | "file";
                name: string;
                value?: string | undefined;
                propertytype?: string | undefined;
            } | {
                type: "object" | "int";
                name: string;
                value?: number | undefined;
                propertytype?: string | undefined;
            } | {
                type: "float";
                name: string;
                value?: number | undefined;
                propertytype?: string | undefined;
            } | {
                type: "bool";
                name: string;
                value?: boolean | undefined;
                propertytype?: string | undefined;
            } | {
                type: "class";
                name: string;
                value?: import("./ITiledMapProperty").Json | undefined;
                propertytype?: string | undefined;
            })[] | undefined;
            rotation?: number | undefined;
            template?: string | undefined;
            text?: {
                text: string;
                bold?: boolean | undefined;
                color?: string | undefined;
                fontfamily?: string | undefined;
                halign?: "center" | "right" | "justify" | "left" | undefined;
                italic?: boolean | undefined;
                kerning?: boolean | undefined;
                pixelsize?: number | undefined;
                strikeout?: boolean | undefined;
                underline?: boolean | undefined;
                valign?: "center" | "bottom" | "top" | undefined;
                wrap?: boolean | undefined;
            } | undefined;
            type?: string | undefined;
            class?: string | undefined;
            width?: number | undefined;
        }[];
        draworder?: string | undefined;
        height?: number | undefined;
        id?: number | undefined;
        offsetx?: number | undefined;
        offsety?: number | undefined;
        parallaxx?: number | undefined;
        parallaxy?: number | undefined;
        properties?: ({
            type: "string" | "color" | "file";
            name: string;
            value?: string | undefined;
            propertytype?: string | undefined;
        } | {
            type: "object" | "int";
            name: string;
            value?: number | undefined;
            propertytype?: string | undefined;
        } | {
            type: "float";
            name: string;
            value?: number | undefined;
            propertytype?: string | undefined;
        } | {
            type: "bool";
            name: string;
            value?: boolean | undefined;
            propertytype?: string | undefined;
        } | {
            type: "class";
            name: string;
            value?: import("./ITiledMapProperty").Json | undefined;
            propertytype?: string | undefined;
        })[] | undefined;
        startx?: number | undefined;
        starty?: number | undefined;
        tintcolor?: string | undefined;
        width?: number | undefined;
        class?: string | undefined;
        x?: number | undefined;
        y?: number | undefined;
    }, {
        type: "objectgroup";
        name: string;
        opacity: number;
        visible: boolean;
        objects: {
            name: string;
            x: number;
            y: number;
            id: number;
            visible: boolean;
            ellipse?: boolean | undefined;
            gid?: number | undefined;
            height?: number | undefined;
            point?: boolean | undefined;
            polygon?: {
                x: number;
                y: number;
            }[] | undefined;
            polyline?: {
                x: number;
                y: number;
            }[] | undefined;
            properties?: ({
                type: "string" | "color" | "file";
                name: string;
                value?: string | undefined;
                propertytype?: string | undefined;
            } | {
                type: "object" | "int";
                name: string;
                value?: number | undefined;
                propertytype?: string | undefined;
            } | {
                type: "float";
                name: string;
                value?: number | undefined;
                propertytype?: string | undefined;
            } | {
                type: "bool";
                name: string;
                value?: boolean | undefined;
                propertytype?: string | undefined;
            } | {
                type: "class";
                name: string;
                value?: import("./ITiledMapProperty").Json | undefined;
                propertytype?: string | undefined;
            })[] | undefined;
            rotation?: number | undefined;
            template?: string | undefined;
            text?: {
                text: string;
                bold?: boolean | undefined;
                color?: string | undefined;
                fontfamily?: string | undefined;
                halign?: "center" | "right" | "justify" | "left" | undefined;
                italic?: boolean | undefined;
                kerning?: boolean | undefined;
                pixelsize?: number | undefined;
                strikeout?: boolean | undefined;
                underline?: boolean | undefined;
                valign?: "center" | "bottom" | "top" | undefined;
                wrap?: boolean | undefined;
            } | undefined;
            type?: string | undefined;
            class?: string | undefined;
            width?: number | undefined;
        }[];
        draworder?: string | undefined;
        height?: number | undefined;
        id?: number | undefined;
        offsetx?: number | undefined;
        offsety?: number | undefined;
        parallaxx?: number | undefined;
        parallaxy?: number | undefined;
        properties?: ({
            type: "string" | "color" | "file";
            name: string;
            value?: string | undefined;
            propertytype?: string | undefined;
        } | {
            type: "object" | "int";
            name: string;
            value?: number | undefined;
            propertytype?: string | undefined;
        } | {
            type: "float";
            name: string;
            value?: number | undefined;
            propertytype?: string | undefined;
        } | {
            type: "bool";
            name: string;
            value?: boolean | undefined;
            propertytype?: string | undefined;
        } | {
            type: "class";
            name: string;
            value?: import("./ITiledMapProperty").Json | undefined;
            propertytype?: string | undefined;
        })[] | undefined;
        startx?: number | undefined;
        starty?: number | undefined;
        tintcolor?: string | undefined;
        width?: number | undefined;
        class?: string | undefined;
        x?: number | undefined;
        y?: number | undefined;
    }>>;
    probability: z.ZodOptional<z.ZodNumber>;
    properties: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<[z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
        value: z.ZodOptional<z.ZodString>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "string" | "color" | "file";
        name: string;
        value?: string | undefined;
        propertytype?: string | undefined;
    }, {
        type: "string" | "color" | "file";
        name: string;
        value?: string | undefined;
        propertytype?: string | undefined;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodUnion<[z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "object" | "int";
        name: string;
        value?: number | undefined;
        propertytype?: string | undefined;
    }, {
        type: "object" | "int";
        name: string;
        value?: number | undefined;
        propertytype?: string | undefined;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"float">;
        value: z.ZodOptional<z.ZodNumber>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "float";
        name: string;
        value?: number | undefined;
        propertytype?: string | undefined;
    }, {
        type: "float";
        name: string;
        value?: number | undefined;
        propertytype?: string | undefined;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"bool">;
        value: z.ZodOptional<z.ZodBoolean>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "bool";
        name: string;
        value?: boolean | undefined;
        propertytype?: string | undefined;
    }, {
        type: "bool";
        name: string;
        value?: boolean | undefined;
        propertytype?: string | undefined;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodLiteral<"class">;
        value: z.ZodOptional<z.ZodType<import("./ITiledMapProperty").Json, z.ZodTypeDef, import("./ITiledMapProperty").Json>>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "class";
        name: string;
        value?: import("./ITiledMapProperty").Json | undefined;
        propertytype?: string | undefined;
    }, {
        type: "class";
        name: string;
        value?: import("./ITiledMapProperty").Json | undefined;
        propertytype?: string | undefined;
    }>]>, "many">>;
    class: z.ZodOptional<z.ZodString>;
    terrain: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        tile: z.ZodNumber;
        properties: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<[z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
            value: z.ZodOptional<z.ZodString>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "string" | "color" | "file";
            name: string;
            value?: string | undefined;
            propertytype?: string | undefined;
        }, {
            type: "string" | "color" | "file";
            name: string;
            value?: string | undefined;
            propertytype?: string | undefined;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodUnion<[z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "object" | "int";
            name: string;
            value?: number | undefined;
            propertytype?: string | undefined;
        }, {
            type: "object" | "int";
            name: string;
            value?: number | undefined;
            propertytype?: string | undefined;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"float">;
            value: z.ZodOptional<z.ZodNumber>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "float";
            name: string;
            value?: number | undefined;
            propertytype?: string | undefined;
        }, {
            type: "float";
            name: string;
            value?: number | undefined;
            propertytype?: string | undefined;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"bool">;
            value: z.ZodOptional<z.ZodBoolean>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "bool";
            name: string;
            value?: boolean | undefined;
            propertytype?: string | undefined;
        }, {
            type: "bool";
            name: string;
            value?: boolean | undefined;
            propertytype?: string | undefined;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodLiteral<"class">;
            value: z.ZodOptional<z.ZodType<import("./ITiledMapProperty").Json, z.ZodTypeDef, import("./ITiledMapProperty").Json>>;
            propertytype: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "class";
            name: string;
            value?: import("./ITiledMapProperty").Json | undefined;
            propertytype?: string | undefined;
        }, {
            type: "class";
            name: string;
            value?: import("./ITiledMapProperty").Json | undefined;
            propertytype?: string | undefined;
        }>]>, "many">>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        tile: number;
        properties?: ({
            type: "string" | "color" | "file";
            name: string;
            value?: string | undefined;
            propertytype?: string | undefined;
        } | {
            type: "object" | "int";
            name: string;
            value?: number | undefined;
            propertytype?: string | undefined;
        } | {
            type: "float";
            name: string;
            value?: number | undefined;
            propertytype?: string | undefined;
        } | {
            type: "bool";
            name: string;
            value?: boolean | undefined;
            propertytype?: string | undefined;
        } | {
            type: "class";
            name: string;
            value?: import("./ITiledMapProperty").Json | undefined;
            propertytype?: string | undefined;
        })[] | undefined;
    }, {
        name: string;
        tile: number;
        properties?: ({
            type: "string" | "color" | "file";
            name: string;
            value?: string | undefined;
            propertytype?: string | undefined;
        } | {
            type: "object" | "int";
            name: string;
            value?: number | undefined;
            propertytype?: string | undefined;
        } | {
            type: "float";
            name: string;
            value?: number | undefined;
            propertytype?: string | undefined;
        } | {
            type: "bool";
            name: string;
            value?: boolean | undefined;
            propertytype?: string | undefined;
        } | {
            type: "class";
            name: string;
            value?: import("./ITiledMapProperty").Json | undefined;
            propertytype?: string | undefined;
        })[] | undefined;
    }>, "many">>;
    type: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: number;
    animation?: {
        duration: number;
        tileid: number;
    }[] | undefined;
    image?: string | undefined;
    imageheight?: number | undefined;
    imagewidth?: number | undefined;
    x?: number | undefined;
    y?: number | undefined;
    width?: number | undefined;
    height?: number | undefined;
    objectgroup?: {
        type: "objectgroup";
        name: string;
        opacity: number;
        visible: boolean;
        objects: {
            name: string;
            x: number;
            y: number;
            id: number;
            visible: boolean;
            ellipse?: boolean | undefined;
            gid?: number | undefined;
            height?: number | undefined;
            point?: boolean | undefined;
            polygon?: {
                x: number;
                y: number;
            }[] | undefined;
            polyline?: {
                x: number;
                y: number;
            }[] | undefined;
            properties?: ({
                type: "string" | "color" | "file";
                name: string;
                value?: string | undefined;
                propertytype?: string | undefined;
            } | {
                type: "object" | "int";
                name: string;
                value?: number | undefined;
                propertytype?: string | undefined;
            } | {
                type: "float";
                name: string;
                value?: number | undefined;
                propertytype?: string | undefined;
            } | {
                type: "bool";
                name: string;
                value?: boolean | undefined;
                propertytype?: string | undefined;
            } | {
                type: "class";
                name: string;
                value?: import("./ITiledMapProperty").Json | undefined;
                propertytype?: string | undefined;
            })[] | undefined;
            rotation?: number | undefined;
            template?: string | undefined;
            text?: {
                text: string;
                bold?: boolean | undefined;
                color?: string | undefined;
                fontfamily?: string | undefined;
                halign?: "center" | "right" | "justify" | "left" | undefined;
                italic?: boolean | undefined;
                kerning?: boolean | undefined;
                pixelsize?: number | undefined;
                strikeout?: boolean | undefined;
                underline?: boolean | undefined;
                valign?: "center" | "bottom" | "top" | undefined;
                wrap?: boolean | undefined;
            } | undefined;
            type?: string | undefined;
            class?: string | undefined;
            width?: number | undefined;
        }[];
        draworder?: string | undefined;
        height?: number | undefined;
        id?: number | undefined;
        offsetx?: number | undefined;
        offsety?: number | undefined;
        parallaxx?: number | undefined;
        parallaxy?: number | undefined;
        properties?: ({
            type: "string" | "color" | "file";
            name: string;
            value?: string | undefined;
            propertytype?: string | undefined;
        } | {
            type: "object" | "int";
            name: string;
            value?: number | undefined;
            propertytype?: string | undefined;
        } | {
            type: "float";
            name: string;
            value?: number | undefined;
            propertytype?: string | undefined;
        } | {
            type: "bool";
            name: string;
            value?: boolean | undefined;
            propertytype?: string | undefined;
        } | {
            type: "class";
            name: string;
            value?: import("./ITiledMapProperty").Json | undefined;
            propertytype?: string | undefined;
        })[] | undefined;
        startx?: number | undefined;
        starty?: number | undefined;
        tintcolor?: string | undefined;
        width?: number | undefined;
        class?: string | undefined;
        x?: number | undefined;
        y?: number | undefined;
    } | undefined;
    probability?: number | undefined;
    properties?: ({
        type: "string" | "color" | "file";
        name: string;
        value?: string | undefined;
        propertytype?: string | undefined;
    } | {
        type: "object" | "int";
        name: string;
        value?: number | undefined;
        propertytype?: string | undefined;
    } | {
        type: "float";
        name: string;
        value?: number | undefined;
        propertytype?: string | undefined;
    } | {
        type: "bool";
        name: string;
        value?: boolean | undefined;
        propertytype?: string | undefined;
    } | {
        type: "class";
        name: string;
        value?: import("./ITiledMapProperty").Json | undefined;
        propertytype?: string | undefined;
    })[] | undefined;
    class?: string | undefined;
    terrain?: {
        name: string;
        tile: number;
        properties?: ({
            type: "string" | "color" | "file";
            name: string;
            value?: string | undefined;
            propertytype?: string | undefined;
        } | {
            type: "object" | "int";
            name: string;
            value?: number | undefined;
            propertytype?: string | undefined;
        } | {
            type: "float";
            name: string;
            value?: number | undefined;
            propertytype?: string | undefined;
        } | {
            type: "bool";
            name: string;
            value?: boolean | undefined;
            propertytype?: string | undefined;
        } | {
            type: "class";
            name: string;
            value?: import("./ITiledMapProperty").Json | undefined;
            propertytype?: string | undefined;
        })[] | undefined;
    }[] | undefined;
    type?: string | undefined;
}, {
    id: number;
    animation?: {
        duration: number;
        tileid: number;
    }[] | undefined;
    image?: string | undefined;
    imageheight?: number | undefined;
    imagewidth?: number | undefined;
    x?: number | undefined;
    y?: number | undefined;
    width?: number | undefined;
    height?: number | undefined;
    objectgroup?: {
        type: "objectgroup";
        name: string;
        opacity: number;
        visible: boolean;
        objects: {
            name: string;
            x: number;
            y: number;
            id: number;
            visible: boolean;
            ellipse?: boolean | undefined;
            gid?: number | undefined;
            height?: number | undefined;
            point?: boolean | undefined;
            polygon?: {
                x: number;
                y: number;
            }[] | undefined;
            polyline?: {
                x: number;
                y: number;
            }[] | undefined;
            properties?: ({
                type: "string" | "color" | "file";
                name: string;
                value?: string | undefined;
                propertytype?: string | undefined;
            } | {
                type: "object" | "int";
                name: string;
                value?: number | undefined;
                propertytype?: string | undefined;
            } | {
                type: "float";
                name: string;
                value?: number | undefined;
                propertytype?: string | undefined;
            } | {
                type: "bool";
                name: string;
                value?: boolean | undefined;
                propertytype?: string | undefined;
            } | {
                type: "class";
                name: string;
                value?: import("./ITiledMapProperty").Json | undefined;
                propertytype?: string | undefined;
            })[] | undefined;
            rotation?: number | undefined;
            template?: string | undefined;
            text?: {
                text: string;
                bold?: boolean | undefined;
                color?: string | undefined;
                fontfamily?: string | undefined;
                halign?: "center" | "right" | "justify" | "left" | undefined;
                italic?: boolean | undefined;
                kerning?: boolean | undefined;
                pixelsize?: number | undefined;
                strikeout?: boolean | undefined;
                underline?: boolean | undefined;
                valign?: "center" | "bottom" | "top" | undefined;
                wrap?: boolean | undefined;
            } | undefined;
            type?: string | undefined;
            class?: string | undefined;
            width?: number | undefined;
        }[];
        draworder?: string | undefined;
        height?: number | undefined;
        id?: number | undefined;
        offsetx?: number | undefined;
        offsety?: number | undefined;
        parallaxx?: number | undefined;
        parallaxy?: number | undefined;
        properties?: ({
            type: "string" | "color" | "file";
            name: string;
            value?: string | undefined;
            propertytype?: string | undefined;
        } | {
            type: "object" | "int";
            name: string;
            value?: number | undefined;
            propertytype?: string | undefined;
        } | {
            type: "float";
            name: string;
            value?: number | undefined;
            propertytype?: string | undefined;
        } | {
            type: "bool";
            name: string;
            value?: boolean | undefined;
            propertytype?: string | undefined;
        } | {
            type: "class";
            name: string;
            value?: import("./ITiledMapProperty").Json | undefined;
            propertytype?: string | undefined;
        })[] | undefined;
        startx?: number | undefined;
        starty?: number | undefined;
        tintcolor?: string | undefined;
        width?: number | undefined;
        class?: string | undefined;
        x?: number | undefined;
        y?: number | undefined;
    } | undefined;
    probability?: number | undefined;
    properties?: ({
        type: "string" | "color" | "file";
        name: string;
        value?: string | undefined;
        propertytype?: string | undefined;
    } | {
        type: "object" | "int";
        name: string;
        value?: number | undefined;
        propertytype?: string | undefined;
    } | {
        type: "float";
        name: string;
        value?: number | undefined;
        propertytype?: string | undefined;
    } | {
        type: "bool";
        name: string;
        value?: boolean | undefined;
        propertytype?: string | undefined;
    } | {
        type: "class";
        name: string;
        value?: import("./ITiledMapProperty").Json | undefined;
        propertytype?: string | undefined;
    })[] | undefined;
    class?: string | undefined;
    terrain?: {
        name: string;
        tile: number;
        properties?: ({
            type: "string" | "color" | "file";
            name: string;
            value?: string | undefined;
            propertytype?: string | undefined;
        } | {
            type: "object" | "int";
            name: string;
            value?: number | undefined;
            propertytype?: string | undefined;
        } | {
            type: "float";
            name: string;
            value?: number | undefined;
            propertytype?: string | undefined;
        } | {
            type: "bool";
            name: string;
            value?: boolean | undefined;
            propertytype?: string | undefined;
        } | {
            type: "class";
            name: string;
            value?: import("./ITiledMapProperty").Json | undefined;
            propertytype?: string | undefined;
        })[] | undefined;
    }[] | undefined;
    type?: string | undefined;
}>;
export type ITiledMapTile = z.infer<typeof ITiledMapTile>;

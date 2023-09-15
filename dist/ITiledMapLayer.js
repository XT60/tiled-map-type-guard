"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITiledMapLayer = void 0;
const zod_1 = require("zod");
const ITiledMapTileLayer_1 = require("./ITiledMapTileLayer");
const ITiledMapObjectLayer_1 = require("./ITiledMapObjectLayer");
exports.ITiledMapLayer = zod_1.z.union([
    ITiledMapTileLayer_1.ITiledMapTileLayer,
    ITiledMapObjectLayer_1.ITiledMapObjectLayer,
]);
//# sourceMappingURL=ITiledMapLayer.js.map
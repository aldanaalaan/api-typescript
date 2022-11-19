"use strict";
var __createBinding =
    (this && this.__createBinding) ||
    (Object.create
        ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              var desc = Object.getOwnPropertyDescriptor(m, k);
              if (
                  !desc ||
                  ("get" in desc
                      ? !m.__esModule
                      : desc.writable || desc.configurable)
              ) {
                  desc = {
                      enumerable: true,
                      get: function () {
                          return m[k];
                      },
                  };
              }
              Object.defineProperty(o, k2, desc);
          }
        : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              o[k2] = m[k];
          });
var __setModuleDefault =
    (this && this.__setModuleDefault) ||
    (Object.create
        ? function (o, v) {
              Object.defineProperty(o, "default", {
                  enumerable: true,
                  value: v,
              });
          }
        : function (o, v) {
              o["default"] = v;
          });
var __importStar =
    (this && this.__importStar) ||
    function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (
                    k !== "default" &&
                    Object.prototype.hasOwnProperty.call(mod, k)
                )
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    };
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, "__esModule", { value: true });
// # Importaiones
const express_1 = __importDefault(require("express"));
const dairyServices = __importStar(require("../services/dairyServices"));
const utils_1 = __importDefault(require("../utils"));
const router = express_1.default.Router();
router.get("/", (_req, res) => {
    res.json(dairyServices.getEntriesWithoutSensitiveInfo());
});
router.get("/:id", (req, res) => {
    const dairy = dairyServices.findById(Number(req.params.id));
    /* res.send(dairy?.weather); */
    return dairy != null ? res.send(dairy) : res.sendStatus(404);
});
router.post("/", (req, res) => {
    try {
        const newDairyEntry = (0, utils_1.default)(req.body);
        const addedDairyEntry = dairyServices.addDairy(newDairyEntry);
        res.json(addedDairyEntry);
    } catch (e) {
        res.status(400).send(e);
    }
});
exports.default = router;

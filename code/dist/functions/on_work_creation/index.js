"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const utils_1 = require("../common/utils");
const test_snap_kit_1 = require("../common/test-snap-kit");
const axios_1 = __importDefault(require("axios"));
const deploySnapKit = (event, PAT) => __awaiter(void 0, void 0, void 0, function* () {
    const headers = {
        Authorization: PAT,
        'Content-Type': 'application/json'
    };
    const ticketId = event.payload.work_updated.work.id;
    console.log('ticketId:' + ticketId);
    const url = utils_1.BASE_URL + utils_1.ENDPOINT.TIMELINE_ENTRIES_CREATE;
    const snapKit = test_snap_kit_1.firstSnapkit;
    snapKit['snap_in_id'] = event.context.snap_in_id;
    snapKit['snap_in_action_name'] = 'on_submit_snap_kit';
    console.log('snapKit' + snapKit);
    const body = {
        object: ticketId,
        body_type: 'snap_kit',
        type: 'timeline_comment',
        snap_kit_body: snapKit,
        visibility: 'internal'
    };
    console.log('variables' + headers + ticketId + url + body);
    const response = yield axios_1.default.post(url, body, { headers });
});
const run = (events) => __awaiter(void 0, void 0, void 0, function* () {
    /*
    Put your code here and remove the log below
    */
    for (var event of events) {
        console.log('HOLA GASTON!!!');
        console.info(`The work ${event.payload.work_created.work.id} has been created.`);
        let PAT = event.context.secrets.service_account_token;
        let payload = event.payload;
        if (event.payload.type != "work_updated") {
            return;
        }
        let old_work = payload.work_updated.old_work;
        let work = payload.work_updated.work;
        if (work.stage.name != old_work.stage.name &&
            work.stage.name == "awaiting_product_assist") {
            //Trigger SnapKit
            console.log('deploying snap kit...');
            yield deploySnapKit(event, PAT);
            //After input value update ticket
        }
    }
});
exports.run = run;
exports.default = exports.run;

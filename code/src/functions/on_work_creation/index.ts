import { BASE_URL, ENDPOINT } from "../common/utils";
import { firstSnapkit } from "../common/test-snap-kit";
import axios from 'axios';
const deploySnapKit = async (event: any, PAT: string) => {
  const headers = {
    Authorization: PAT,
    'Content-Type': 'application/json'
  }
  const ticketId = event.payload.work_updated.work.id
  console.log('ticketId:' + ticketId)
  const url = BASE_URL + ENDPOINT.TIMELINE_ENTRIES_CREATE
  const snapKit = firstSnapkit as any
  snapKit['snap_in_id'] = event.context.snap_in_id
  snapKit['snap_in_action_name'] = 'on_submit_snap_kit'
  console.log('snapKit' + snapKit)
  const body = {
    object: ticketId,
    body_type: 'snap_kit',
    type: 'timeline_comment',
    snap_kit_body: snapKit,
    visibility: 'internal'
  }
  console.log('variables' + headers + ticketId + url + body)
  const response = await axios.post(url,body,{headers})
};


export const run = async (events: any[]) => {
  /*
  Put your code here and remove the log below
  */
 for(var event of events) {
    console.log('HOLA GASTON!!!')
    console.info(`The work ${event.payload.work_created.work.id} has been created.`);

    let PAT: string = event.context.secrets.service_account_token
    let payload = event.payload;
    if(event.payload.type != "work_updated") {
      return;
    }
    let old_work = payload.work_updated.old_work
    let work = payload.work_updated.work

    if(work.stage.name != old_work.stage.name && 
      work.stage.name == "awaiting_product_assist") {
        //Trigger SnapKit
        console.log('deploying snap kit...')
        await deploySnapKit(event, PAT)
        //After input value update ticket
    } 
  }
};

export default run;

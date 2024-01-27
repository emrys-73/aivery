/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { error, redirect } from "@sveltejs/kit";
import { serializeNonPOJOs } from "$lib/utils.js";

export const load = ({ locals, params }) => {
    const getLead = async () => {
        try {
            const lead = serializeNonPOJOs(await locals.pb.collection('aivery_leads').getFirstListItem(`id="${params.leadId}"`))
            return lead
        } catch (err) {
            console.log("Whoops")
        }
    }

    const getuser = async () => {
        try {
            const user = serializeNonPOJOs(await locals.pb.collection('aivery_users').getFirstListItem(`username="${params.username}"`))
            return user
        } catch (err) {
            console.log("Whoops")
        }
    }

    return {
        lead: getLead(),
        username: params.username,
        user: getuser()
    }

}
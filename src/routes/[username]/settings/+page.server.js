/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { error, redirect } from "@sveltejs/kit";
import { serializeNonPOJOs } from "$lib/utils.js";

export const load = ({ locals, params }) => {

    const getuser = async () => {
        try {
            const user = serializeNonPOJOs(await locals.pb.collection('aivery_users').getFirstListItem(`username="${params.username}"`))
            return user
        } catch (err) {
            console.log("Whoops")
        }
    }

    return {
        username: params.username,
        user: getuser()
    }

}


export const actions = {
    updateProduct: async ({ request, locals }) => {

        const data = await Object.fromEntries(await request.formData())
        console.log(data.prod)


        const updatedData = {
            "product": data.prod
        };


        
        try {
            const record = await locals.pb.collection('aivery_users').update(data.id, updatedData);

            console.log(record)
        } catch (error) {
            console.log("Whomp Whomp")
        }

    },

    resetProduct: async ({ request, locals }) => {

        const data = await Object.fromEntries(await request.formData())
        console.log(data.prod)


        const updatedData = {
            "product": data.prod
        };

        
        
        try {
            const record = await locals.pb.collection('aivery_users').update(data.id, updatedData);

            console.log("record resetted")
        } catch (error) {
            console.log("Whomp Whomp")
        }

    },



}

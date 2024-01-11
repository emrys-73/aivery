/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck


import { redirect } from "@sveltejs/kit";

export const actions = {
    login: async ({ request, locals }) => {
        const body = await Object.fromEntries(await request.formData())

        let userPath = "/error"

        try {
            await locals.pb.collection('aivery_users').authWithPassword(body.email, body.password)

            userPath = `/${locals.pb.authStore.model.username}/home`

            if (!locals.pb?.authStore?.model?.verified) {
                // Log Out instantly before letting the user interact
                locals.pb.authStore.clear() 
                userPath = '/error'
                return {
                    notVerified: true
                }
            }

        } catch (err) {
            console.log('Error', err);
            throw redirect(303, userPath)    
            // throw error(500, 'Something went wrong loggin in')
        } 
        throw redirect(303, userPath);
    }
};
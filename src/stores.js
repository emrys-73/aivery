/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import { writable } from 'svelte/store';

export const richResponse = writable();

export const animate = writable("transition-all duration-300 ease-in-out")

export const userDataStore = writable({});

export const currentLeadUrl = writable("");
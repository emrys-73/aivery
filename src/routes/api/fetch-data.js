/* eslint-disable @typescript-eslint/ban-ts-comment */
import fetch from 'node-fetch';

// @ts-ignore
export async function post(request) {
  const { url } = await request.json();

  try {
    const response = await fetch(url);
    const data = await response.text();

    return {
      status: 200,
      body: data,
    };
  } catch (error) {
    return {
      status: 500,
      body: 'Server error',
    };
  }
}

'use client'

import * as jwt from 'jsonwebtoken';
import {AuthContextFields} from "@/providers/auth";
import {redirect, RedirectType} from "next/navigation";
import {AUTH_PAGE} from "@/constants/routes";
import {fetchDataFromClient} from "@/helpers/api-helpers";
import {AxiosRequestConfig} from "axios";

const TOKEN_KEY = 'auth'
const USER_KEY = 'user'

export function isExpired(expDate: number) {
  return Date.now() > expDate * 1000
}

export function saveJwtInfo(loginValues: AuthContextFields) {
  if (!loginValues.user || !loginValues.token) {
    return;
  }

  localStorage.setItem(TOKEN_KEY, loginValues.token)
  localStorage.setItem(USER_KEY, JSON.stringify(loginValues.user))
}

export function getCachedToken() {
  const token = localStorage.getItem(TOKEN_KEY);

  if (!token) {
    return;
  }

  const content = jwt.decode(token)

  // @ts-ignore
  if (content && isExpired(content.exp)) {
    return;
  }

  return token
}

export function getCachedUser() {
  const userString = localStorage.getItem(USER_KEY);

  if (!userString) {
    return;
  }

  try {
    return JSON.parse(userString)
  } catch (e) {
    console.log(e)
    return;
  }
}

export async function fetchWithToken<TResponse>(url: string, config?: AxiosRequestConfig<any>) {
  const token = getCachedToken()

  if (!token) {
    redirect(AUTH_PAGE, RedirectType.replace)
  }

  return fetchDataFromClient<TResponse>(url, config)
}
'use client'

import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {AUTH_PAGE} from "@/constants/routes";
import {useAuthContext} from "@/providers/auth";

export function useMandatoryAuth() {
  const { token, user, isReady } = useAuthContext()
  const { replace } = useRouter();

  useEffect(() => {
    if (isReady && typeof window !== 'undefined' && (!token || !user)) {
      replace(AUTH_PAGE)
    }
  }, [isReady, replace, token, user])

  return {isLoaded: isReady, token}
}
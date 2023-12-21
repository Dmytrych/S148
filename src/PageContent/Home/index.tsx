import {Box} from '@mui/material';
import {useEffect} from "react";
import {useRouter} from "next/router";

export function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/products', undefined, { shallow: true })
  }, [])

  return (
    <Box />
  );
}
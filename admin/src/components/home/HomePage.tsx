"use client"

import {Button, Container, Stack, Typography} from "@mui/material";
import {useRouter} from "next/navigation";
import {ARTICLES_PAGE} from "@/constants/routes";
import {locale} from "@/locale/ua";

const CARDS = [
  {
    title: locale.navigate_to_articles,
    url: ARTICLES_PAGE
  },
  {
    title: locale.navigate_to_orders,
    url: ARTICLES_PAGE
  }
]

const HomePage = () => {
  const router = useRouter();

  return (
    <Container>
      <Stack direction="row" spacing={2} pt={10}>
        {CARDS.map((card, index) => (
          <Button key={index} sx={{ flex: 1, height: "100px" }} onClick={() => router.push(card.url)}>
            <Typography variant="h5" component="div">
              {card.title}
            </Typography>
          </Button>
        ))}
      </Stack>
    </Container>
  )
}

export default HomePage;

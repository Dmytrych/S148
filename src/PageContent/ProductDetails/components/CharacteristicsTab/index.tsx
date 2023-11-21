import {Box, Typography} from "@mui/material";
import {Characteristic} from "@/api/DTO/products";
import {Characteristics} from "@/PageContent/ProductDetails/components/Characteristics";
import {productPageLocale} from "@/locale/ua/productPage";

interface Props {
  characteristics?: Characteristic[]
}

export function CharacteristicsTab({ characteristics }: Props) {
  return (
    <Box pt={2}>
      { characteristics?.length ? <Characteristics characteristics={characteristics}/> : <Typography>{productPageLocale.characteristicsNotFound}</Typography> }
    </Box>
  )
}
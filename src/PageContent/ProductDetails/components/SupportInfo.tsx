import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import {Box, Typography, styled} from "@mui/material";
import {productPageLocale} from "@/locale/ua/productPage";
import {importantInfoLocale} from "@/locale/ua/importantInfo";

export function SupportInfo() {
    return (
        <Box display="flex" flexDirection="column" gap={2}>
            <Box>
                <Box display="flex" flexDirection="row" gap={1}>
                    <Box>
                        <LocalShippingIcon color="primary"/>
                    </Box>
                    <Box>
                        <Typography variant="h6" color="primary">{productPageLocale.delivery}</Typography>
                    </Box>
                </Box>
                <Box>
                    {productPageLocale.novaPoshta}
                </Box>
            </Box>
            <Box>
                <Box display="flex" flexDirection="row" gap={1}>
                    <Box>
                        <PaymentIcon color="primary"/>
                    </Box>
                    <Box>
                        <Typography variant="h6" color="primary">{productPageLocale.payment}</Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography>
                        {productPageLocale.card}<br/>
                        {productPageLocale.cash}
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Box display="flex" flexDirection="row" gap={1}>
                    <Box>
                        <ContactSupportIcon color="primary"/>
                    </Box>
                    <Box>
                        <Typography variant="h6" color="primary">{productPageLocale.support}</Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography>{productPageLocale.callUs}: <b>{importantInfoLocale.contactUsPhoneNumber}</b></Typography>
                </Box>
            </Box>
        </Box>
    )
}

const ItemHeaderContainer = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing(1),
}))
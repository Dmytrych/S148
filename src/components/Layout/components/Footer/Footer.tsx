import {Box, Container, Grid, IconButton, styled, Typography} from "@mui/material";
import {Facebook, Instagram, Twitter} from "@mui/icons-material";

const companyName = 'S148 Engineering';
const email = 's148.engineering@gmail.com';
const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER ?? "number";
const socialMediaLinks: SocialMediaLinks = {
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_LINK ?? "",
    twitter: process.env.NEXT_PUBLIC_TWITTER_LINK ?? "",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_LIMK ?? "",
};

interface SocialMediaLinks {
    facebook: string;
    twitter: string;
    instagram: string;
}

export function Footer() {
    return (
        <FooterContent>
            <Container>
                <Grid container mt={2}>
                    <Grid item xs={12} sm={6} md={8}>
                        <Typography variant="h6" gutterBottom>
                            {companyName}
                        </Typography>
                        <Typography variant="body2">Email: {email}</Typography>
                        <Typography variant="body2">Phone: {phoneNumber}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Connect with Us
                        </Typography>
                        <div>
                            <IconButton
                                href={socialMediaLinks.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Facebook />
                            </IconButton>
                            <IconButton
                                href={socialMediaLinks.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Twitter />
                            </IconButton>
                            <IconButton
                                href={socialMediaLinks.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Instagram />
                            </IconButton>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </FooterContent>
    );
}

const FooterContent = styled("footer")(({theme}) => ({
    width: "100%",
    backgroundColor: theme.palette.background.default,
    borderTop: `1px solid ${theme.palette.divider}`,
    height: "100px",
}))
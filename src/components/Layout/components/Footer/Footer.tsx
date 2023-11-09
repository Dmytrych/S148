import {Box, Container, Grid, IconButton, styled, Typography} from "@mui/material";
import {Facebook, Instagram, Twitter} from "@mui/icons-material";

const companyName = 'Your E-Commerce Store';
const address = '1234 Main Street, City, Country';
const email = 'contact@example.com';
const phoneNumber = '+1 (123) 456-7890';
const socialMediaLinks: SocialMediaLinks = {
    facebook: process.env.FACEBOOK_LINK ?? "",
    twitter: process.env.TWITTER_LINK ?? "",
    instagram: process.env.INSTAGRAM_LIMK ?? "",
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
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6" gutterBottom>
                            {companyName}
                        </Typography>
                        <Typography variant="body2">{address}</Typography>
                        <Typography variant="body2">Email: {email}</Typography>
                        <Typography variant="body2">Phone: {phoneNumber}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        {/* Add your quick links here */}
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
    borderTop: `1px solid ${theme.palette.divider}`
}))
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

function LoginPage() {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    return (
        <Box>
            <Box
                width="100%"
                backgroundColor={theme.palette.background.alt}
                p="1rem 6%"
                textAlign="center"
            >
                <Typography fontWeight="bold" fontSize="32px" color="primary">
                    FriendLink
                </Typography>
            </Box>

            <Box
                width={isNonMobileScreens ? "50%" : "93%"}
                p="2rem"
                m="2rem auto"
                borderRadius="1.5rem"
                backgroundColor={theme.palette.background.alt}
            >
                <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
                    Welcome to FriendLink, the Social Media for Sociopaths!
                </Typography>
                <Typography fontWeight="500" variant="h6" sx={{ mb: "1rem" }}>
                    To explore application use Login: test@account.com and
                    password: 123456789
                </Typography>
                <Form />
            </Box>
        </Box>
    );
}

export default LoginPage;

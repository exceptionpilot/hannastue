import { Box, Container } from "@mui/material";

export default function SocialView() {
    return (
        <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          textAlign: 'center',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
        >
        <Container maxWidth="sm">
        </Container>

            </Box>
    );
}
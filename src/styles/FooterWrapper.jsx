import { Stack, styled } from "@mui/material";

export const FooterWrapper = styled(Stack)`
    padding: 20px 0;
    background-color: ${({theme}) => theme.palette.primary.main};
`
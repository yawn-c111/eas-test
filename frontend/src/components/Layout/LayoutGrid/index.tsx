import { Grid } from "@chakra-ui/react";
import { ReactNode } from "react";


export const LayoutGrid = ({ children }: { children: ReactNode }) => {
    return (
        <Grid
            gridTemplateColumns="100%"
            gridTemplateRows="auto 1fr auto"
            minHeight="100vh"
        >
            {children}
        </Grid>
    )
};

export default LayoutGrid;

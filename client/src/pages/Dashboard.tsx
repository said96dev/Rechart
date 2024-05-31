import { Row1, Row2, Row3 } from "@/Components";
import { Box, useMediaQuery } from "@mui/material"

const Dashboard = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
    const gridTemplateLargeScreens = `
    "a b c"
    "a b c"
    "a b c"
    "a b f"
    "d e f"
    "d e f"
    "d h i"
    "g h i"
    "g h j"
    "g h j"
    `
    const error = console.error;
    console.error = (...args) => {
        if (/defaultProps/.test(args[0])) return;
        error(...args);
    };
    return (
        <Box className={`w-full h-full ${isAboveMediumScreens ? "grid gap-6" : "flex flex-col"}`} sx={isAboveMediumScreens ? {
            gridTemplateAreas: gridTemplateLargeScreens,
            gridTemplateColumns: "repeat(3, minmax(370px,1fr))",
            gridTemplateRows: "repeat(10, minmax(60px , 1fr))",
        } : {}}>
            <Row1 />
            <Row2 />
            <Row3 />
        </Box>
    )
}
export default Dashboard
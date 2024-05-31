import { links } from "@/utils/NavbarLinks";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Box, useTheme, Typography } from "@mui/material";
import { FlexBetween } from "./index";
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

const Navbar = () => {
    const { palette } = useTheme();
    const [active, setActive] = useState("dashboard")
    return (
        <FlexBetween mb="0.25rem" p=".5rem 0rem" color={palette.grey[300]}>
            <Box gap=".75rem" alignItems="end" display="flex" justifyContent="space-between">
                <LeaderboardIcon sx={{ fontSize: "28px" }} />
                <Typography variant="h4" fontSize="16px" className="ml-2">
                    MUI Dashboard
                </Typography>
            </Box>
            <FlexBetween gap="2rem">
                {links.map((link) => (
                    <Box
                        key={link.label}
                        sx={{ '&:hover': { color: palette.primary[100] } }}
                        className={`capitalize ${active === link.label ? 'text-gray-100 no-underline' : 'text-gray-700'}`}
                    >
                        <Link
                            to={link.path}
                            onClick={() => setActive(link.label)}
                            className={`${active === link.label ? 'text-gray-100 no-underline' : 'text-gray-700'}`}
                            style={{
                                color: active === link.label ? palette.grey[100] : palette.grey[700],
                            }}
                        >
                            {link.label}
                        </Link>
                    </Box>
                ))}
            </FlexBetween>
        </FlexBetween>
    )
}

export default Navbar;
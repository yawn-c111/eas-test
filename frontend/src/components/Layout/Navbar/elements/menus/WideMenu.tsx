import { ReactNode } from "react";
import NextLink from "next/link";
import { Box, Text } from "@chakra-ui/react";

interface MenuItemProps {
    href: string;
    children: ReactNode;
}

const MenuItem = ({ href, children }: MenuItemProps) => {
    return (
        <Box>
            <NextLink href={href}>
                <Box>
                    <Text
                        color="nav.text"
                        fontSize="xl"
                        whiteSpace="nowrap"
                    >
                        {children}
                    </Text>
                </Box>
            </NextLink>
        </Box>
    )
}

export default MenuItem;

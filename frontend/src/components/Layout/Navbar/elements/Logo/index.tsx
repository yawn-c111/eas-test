import NextLink from "next/link";
import { Text } from "@chakra-ui/react";

const Logo = () => {
    return (
        <NextLink href="/">
            <Text
                color="nav.text"
                fontSize={{ base: "xl", md: "2xl" }}
                whiteSpace="nowrap"
            >
                Dapp Template
            </Text>
        </NextLink>
    )
}

export default Logo;

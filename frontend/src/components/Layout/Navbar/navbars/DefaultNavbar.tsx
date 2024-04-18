import {
    Box,
    Flex,
    HStack,
    IconButton,
    Spacer,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Logo from "../elements/Logo";
import MenuItem from "../elements/menus/WideMenu";
import { menuItems } from "../elements/menus/menuItems";
import { WalletButton } from "@/features/connectWallet/WalletButton";
import MobileMenu from "../elements/menus/MobileMenu";

export const DefaultNavbar = () => {
    return (
        <>
            <Flex
                as="nav"
                bg="nav.bg"
                align="center"
                justify="space-between"
                px={{ base: 3, md: 65 }}
                py={{ base: 3, md: 30 }}
            >
                <Flex
                    justifyContent="center"
                    width={{ base: "150px", md: "auto" }}
                    pr={{ base: 'auto', md: 16 }}
                >
                    <Logo />
                </Flex>
                <Box
                    display={{ base: "none", md: "block" }}
                >
                    <HStack spacing={8} align="center" w="100%">
                        {menuItems.map((menuItem) => (
                            <MenuItem key={menuItem.href} href={menuItem.href}>
                                {menuItem.menuTitle}
                            </MenuItem>
                        ))}
                    </HStack>
                </Box>
                <Flex
                    align="center"
                    flexGrow={2}
                >
                    <Spacer />
                    <Box mr={{ base: 4, md: 0 }}>
                        <WalletButton />
                    </Box>
                </Flex>
                <MobileMenu />
            </Flex>
        </>
    )
};

export default DefaultNavbar;

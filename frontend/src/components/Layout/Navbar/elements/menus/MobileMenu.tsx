import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export const MobileMenu = () => {
    return (
        <IconButton
            aria-label="Menu"
            icon={<HamburgerIcon />}
            size="lg"
            variant="outline"
            color="white"
            display={{ base: "flex", md: "none" }}
        />
    )
};

export default MobileMenu;

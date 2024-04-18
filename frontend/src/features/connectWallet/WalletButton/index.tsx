import { Button } from "@chakra-ui/react";
import useMyWeb3Modal from "@/hooks/wallet/useMyWeb3Modal";


export const WalletButton = () => {
    const { open } = useMyWeb3Modal()

    return (
        <Button
            bg="btn.bg"
            color="btn.text"
            borderRadius={"10px"}
            variant="solid"
            size="md"
            onClick={() => open()}
        >
            ウォレット
        </Button>
    )
};

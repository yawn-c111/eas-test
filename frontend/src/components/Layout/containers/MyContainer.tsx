import { Container, VStack } from "@chakra-ui/react";

const MyContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <Container maxW="container.xl" p={0}>
            <VStack
                w="full"
                h="full"
                p={10}
                alignItems="flex-start"
            >
                {children}
            </VStack>
        </Container>
    )
};

export default MyContainer;

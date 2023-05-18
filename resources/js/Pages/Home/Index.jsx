import { Link } from "@inertiajs/inertia-react";
import {
    Container,
    Heading,
    Text,
    Box,
    Button,
    Stack,
    Image,
} from "@chakra-ui/react";

const Home = () => {
    return (
        <Container maxW="container.lg" mt={10}>
            <Box
                display="flex"
                flexDirection={["column", "row"]}
                alignItems="center"
                justifyContent="space-between"
                mb={10}
            >
                <Box flex="1">
                    <Heading as="h1" size="2xl" mb={5}>
                        Welcome to My E-Commerce App
                    </Heading>
                    <Text fontSize="lg" mb={5}>
                        Explore the latest trends and exceptional quality
                        products from your favourite brands. With unbeatable
                        prices and same-day delivery, shopping has never been so
                        easy!
                    </Text>
                    <Stack direction={["column", "row"]} spacing={4} mb={5}>
                        <Link href="/login">
                            <Button colorScheme="blue" size="lg">
                                Login
                            </Button>
                        </Link>
                        <Link href="/register">
                            <Button colorScheme="purple" size="lg">
                                Register
                            </Button>
                        </Link>
                    </Stack>
                </Box>
                <Box flex="1" display="flex" justifyContent="center">
                    <Image
                        src="images/shopping.png"
                        alt="E-Commerce Image"
                        objectFit="cover"
                        borderRadius="md"
                    />
                </Box>
            </Box>
        </Container>
    );
};

export default Home;

import { Link } from "@inertiajs/inertia-react";
import { Container, Heading, Box, Button, Stack } from "@chakra-ui/react";

const Home = () => {
    return (
        <Container maxW="container.lg" mt={10}>
            <Heading as="h1" size="2xl" mb={10}>
                Welcome to My App
            </Heading>
            <Box>
                <Stack direction={["column", "row"]} spacing={4}>
                    <Link href="/login">
                        <Button colorScheme="teal" size="lg">
                            Login
                        </Button>
                    </Link>
                    <Link href="/register">
                        <Button colorScheme="teal" size="lg">
                            Register
                        </Button>
                    </Link>
                </Stack>
            </Box>
        </Container>
    );
};

export default Home;

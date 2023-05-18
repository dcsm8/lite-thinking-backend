import React from "react";
import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    HStack,
    Button,
    Flex,
} from "@chakra-ui/react";
import { InertiaLink } from "@inertiajs/inertia-react";
import Layout from "../../components/Layout";

const View = ({ company, auth }) => {
    return (
        <Layout auth={auth}>
            <Container maxW="container.lg">
                <Box maxW="xl" mx="auto" mt={5}>
                    <Heading as="h1" size="xl" mb={5}>
                        Company Details
                    </Heading>
                    <VStack spacing={4} align="start">
                        <HStack spacing={2}>
                            <Text fontWeight="bold">NIT:</Text>
                            <Text>{company.NIT}</Text>
                        </HStack>
                        <HStack spacing={2}>
                            <Text fontWeight="bold">Name:</Text>
                            <Text>{company.name}</Text>
                        </HStack>
                        <HStack spacing={2}>
                            <Text fontWeight="bold">Address:</Text>
                            <Text>{company.address}</Text>
                        </HStack>
                        <HStack spacing={2}>
                            <Text fontWeight="bold">Phone:</Text>
                            <Text>{company.phone}</Text>
                        </HStack>
                    </VStack>
                    <Flex justifyContent="flex-end" mt={5}>
                        <InertiaLink href="/companies">
                            <Button colorScheme="blue" mr={3}>
                                Back
                            </Button>
                        </InertiaLink>
                    </Flex>
                </Box>
            </Container>
        </Layout>
    );
};

export default View;

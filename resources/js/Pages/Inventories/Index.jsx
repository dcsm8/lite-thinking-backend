import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Button,
    Container,
    Heading,
    Box,
    Stack,
    Flex,
    Link as ChakraLink,
} from "@chakra-ui/react";
import Layout from "../../components/Layout";

const Index = ({ inventories, auth }) => {
    return (
        <Layout auth={auth}>
            <Container maxW="container.lg">
                <Box>
                    <Flex
                        justifyContent="space-between"
                        alignItems="center"
                        m={5}
                    >
                        <Heading as="h1" size="xl">
                            Inventories
                        </Heading>
                        <InertiaLink href="/inventories/create">
                            <Button colorScheme="green" size="sm">
                                Create inventory
                            </Button>
                        </InertiaLink>
                    </Flex>
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>Company NIT</Th>
                                <Th>Product Name</Th>
                                <Th>Quantity</Th>
                                <Th>Actions</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {inventories.map((inventory) => (
                                <Tr key={inventory.id}>
                                    <Td>
                                        <ChakraLink
                                            as={InertiaLink}
                                            href={`/companies/${inventory.company_NIT}`}
                                            color="blue.500"
                                        >
                                            {inventory.company_NIT}
                                        </ChakraLink>
                                    </Td>

                                    <Td>{inventory.product.name}</Td>
                                    <Td>{inventory.quantity}</Td>
                                    <Td>
                                        <Stack direction="row" spacing={4}>
                                            <InertiaLink
                                                href={`/inventories/${inventory.id}/edit`}
                                            >
                                                <Button
                                                    colorScheme="blue"
                                                    size="sm"
                                                >
                                                    Edit
                                                </Button>
                                            </InertiaLink>
                                            <Button
                                                size="sm"
                                                colorScheme="red"
                                                onClick={() =>
                                                    handleDelete(inventory.id)
                                                }
                                            >
                                                Delete
                                            </Button>
                                        </Stack>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </Box>
            </Container>
        </Layout>
    );
};

export default Index;

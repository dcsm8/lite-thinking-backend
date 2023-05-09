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
} from "@chakra-ui/react";

const Index = ({ products }) => {
    return (
        <Container maxW="container.lg">
            <Box py={8}>
                <Heading as="h1" size="xl" mb={8}>
                    Products
                </Heading>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Name</Th>
                            <Th>Description</Th>
                            <Th>Price</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {products.map((product) => (
                            <Tr key={product.id}>
                                <Td>{product.id}</Td>
                                <Td>{product.name}</Td>
                                <Td>{product.description}</Td>
                                <Td>{product.price}</Td>
                                <Td>
                                    <InertiaLink
                                        href={`/products/${product.id}/edit`}
                                    >
                                        <Button colorScheme="blue" size="sm">
                                            Edit
                                        </Button>
                                    </InertiaLink>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
                <Box mt={8}>
                    <InertiaLink href="/products/create">
                        <Button colorScheme="green" size="sm">
                            Create new product
                        </Button>
                    </InertiaLink>
                </Box>
            </Box>
        </Container>
    );
};

export default Index;

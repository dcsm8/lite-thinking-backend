import React, { useState } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
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
    useDisclosure,
    Flex,
} from "@chakra-ui/react";
import DeleteConfirmationModal from "../../components/DeleteConfirmationModal";
import Layout from "../../components/Layout";

const Index = ({ products, auth }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleDelete = () => {
        Inertia.delete(`/products/${selectedProduct.id}`);
    };

    const handleClickDelete = (product) => {
        setSelectedProduct(product);
        onOpen();
    };

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
                            Products
                        </Heading>
                        <InertiaLink href="/products/create">
                            <Button colorScheme="green" size="sm">
                                Create product
                            </Button>
                        </InertiaLink>
                    </Flex>
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
                                        <Stack direction="row" spacing={4}>
                                            <InertiaLink
                                                href={`/products/${product.id}/edit`}
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
                                                    handleClickDelete(product)
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
                    <DeleteConfirmationModal
                        isOpen={isOpen}
                        onClose={onClose}
                        onDelete={handleDelete}
                    />
                </Box>
            </Container>
        </Layout>
    );
};

export default Index;

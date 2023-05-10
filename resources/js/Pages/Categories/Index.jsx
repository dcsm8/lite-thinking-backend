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

const Index = ({ categories, auth }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleDelete = () => {
        Inertia.delete(`/categories/${selectedCategory.id}`);
    };

    const handleClickDelete = (category) => {
        setSelectedCategory(category);
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
                            Categories
                        </Heading>
                        <InertiaLink href="/categories/create">
                            <Button colorScheme="green" size="sm">
                                Create category
                            </Button>
                        </InertiaLink>
                    </Flex>
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>ID</Th>
                                <Th>Name</Th>
                                <Th>Description</Th>
                                <Th>Actions</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {categories.map((category) => (
                                <Tr key={category.id}>
                                    <Td>{category.id}</Td>
                                    <Td>{category.name}</Td>
                                    <Td>{category.description}</Td>
                                    <Td>
                                        <Stack direction="row" spacing={4}>
                                            <InertiaLink
                                                href={`/categories/${category.id}/edit`}
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
                                                    handleClickDelete(category)
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

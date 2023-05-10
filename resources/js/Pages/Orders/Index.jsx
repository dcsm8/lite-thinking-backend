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

const Index = ({ orders, auth }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedOrder, setSelectedOrder] = useState(null);

    const handleDelete = () => {
        Inertia.delete(`/orders/${selectedOrder.id}`);
    };

    const handleClickDelete = (order) => {
        setSelectedOrder(order);
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
                            Orders
                        </Heading>
                        <InertiaLink href="/orders/create">
                            <Button colorScheme="green" size="sm">
                                Create order
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
                            {orders.map((order) => (
                                <Tr key={order.id}>
                                    <Td>{order.id}</Td>
                                    <Td>{order.name}</Td>
                                    <Td>{order.description}</Td>
                                    <Td>{order.price}</Td>
                                    <Td>
                                        <Stack direction="row" spacing={4}>
                                            <InertiaLink
                                                href={`/orders/${order.id}/edit`}
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
                                                    handleClickDelete(order)
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

import React, { useEffect, useState } from "react";
import {
    Box,
    Container,
    Heading,
    Text,
    Flex,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Stack,
    Button,
} from "@chakra-ui/react";
import Layout from "../../components/Layout";

const Edit = ({ auth, order }) => {
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let total = 0;
        order.products.forEach((product) => {
            total += product.price * product.pivot.quantity;
        });
        setTotalPrice(total.toFixed(2));
    }, [order]);

    const handleDownload = () => {
        window.location.href = `/orders/${order.id}/pdf`;
    };

    return (
        <Layout auth={auth}>
            <Container maxW="container.lg">
                <Box maxW="xl" mx="auto" mt={5}>
                    <Stack>
                        <Heading as="h1" size="xl" mb={5}>
                            View Order {order.id}
                        </Heading>
                        <Button onClick={handleDownload}>Download PDF</Button>
                    </Stack>

                    <Text mb={5}>Order name: {order.name}</Text>
                    <Text mb={5}>Order description: {order.description}</Text>
                    <Text mb={5}>Client: {order.user.name}</Text>
                    <Text mb={5}>Phone: {order.user.phone}</Text>

                    <Heading as="h2" size="lg" mb={5}>
                        Products
                    </Heading>

                    <Table variant="striped">
                        <Thead>
                            <Tr>
                                <Th>Product Name</Th>
                                <Th>Quantity</Th>
                                <Th isNumeric>Price</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {order.products.map((product, index) => (
                                <Tr key={index}>
                                    <Td>{product.name}</Td>
                                    <Td>{product.pivot.quantity}</Td>
                                    <Td isNumeric>{product.price}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>

                    <Flex justifyContent="flex-end" mt={5}>
                        <Text fontSize="xl">Total price: {totalPrice}</Text>
                    </Flex>
                </Box>
            </Container>
        </Layout>
    );
};

export default Edit;

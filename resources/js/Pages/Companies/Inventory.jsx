import React from "react";
import {
    Box,
    Container,
    Heading,
    VStack,
    HStack,
    Text,
    Table,
    Thead,
    Tr,
    Td,
    Th,
    Tbody,
} from "@chakra-ui/react";
import Layout from "../../components/Layout";

const Inventory = ({ company, auth }) => {
    console.log(company);
    return (
        <Layout auth={auth}>
            <Container maxW="container.lg">
                <Box maxW="xl" mx="auto" mt={5}>
                    <Heading as="h1" size="xl" mb={5}>
                        Company Inventory
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
                        <Heading as="h2" size="lg" mb={5} mt={5}>
                            Inventory:
                        </Heading>
                        <Table variant="simple">
                            <Thead>
                                <Tr>
                                    <Th>Product ID</Th>
                                    <Th>Item</Th>
                                    <Th>Quantity</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {company.inventory &&
                                company.inventory.length > 0 ? (
                                    company.inventory.map((item, index) => (
                                        <Tr key={index}>
                                            <Td>{item.product_id}</Td>
                                            <Td>{item.product.name}</Td>
                                            <Td>{item.quantity}</Td>
                                        </Tr>
                                    ))
                                ) : (
                                    <Tr>
                                        <Td colSpan="3">
                                            No inventory items available
                                        </Td>
                                    </Tr>
                                )}
                            </Tbody>
                        </Table>
                    </VStack>
                </Box>
            </Container>
        </Layout>
    );
};

export default Inventory;

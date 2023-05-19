import React from "react";
import { useForm } from "@inertiajs/inertia-react";
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
    Button,
    Stack,
    FormControl,
    FormLabel,
    Input,
    Flex,
} from "@chakra-ui/react";
import Layout from "../../components/Layout";

const Inventory = ({ company, auth, emailError, emailSuccess }) => {
    const { data, setData, post, processing } = useForm({ email: "" });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(`/companies/${company.NIT}/sendEmail`);
    };

    const handleDownload = () => {
        window.location.href = `/companies/${company.NIT}/pdf`;
    };

    return (
        <Layout auth={auth}>
            <Container maxW="container.lg">
                <Box maxW="xl" mx="auto" mt={5}>
                    <Stack>
                        <Heading as="h1" size="xl" mb={5}>
                            Company Inventory
                        </Heading>
                        <Button colorScheme="blue" onClick={handleDownload}>
                            Download PDF
                        </Button>
                        <form onSubmit={handleSubmit}>
                            <FormControl id="email" isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={handleChange}
                                />
                                {emailError && (
                                    <Text color="red.500">{emailError}</Text>
                                )}
                                {emailSuccess && (
                                    <Text color="green.500">
                                        {emailSuccess}
                                    </Text>
                                )}
                            </FormControl>
                            <Flex justifyContent="end">
                                <Button
                                    mt={3}
                                    colorScheme="purple"
                                    type="submit"
                                    isLoading={processing}
                                >
                                    Send Email
                                </Button>
                            </Flex>
                        </form>
                    </Stack>
                    <VStack spacing={4} align="start" mt={4}>
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

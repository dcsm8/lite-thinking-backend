import React from "react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Container,
    Heading,
    Box,
    Flex,
} from "@chakra-ui/react";
import Layout from "../../components/Layout";

const Index = ({ companies, auth }) => {
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
                            Companies
                        </Heading>
                    </Flex>
                    <Table variant="striped">
                        <Thead>
                            <Tr>
                                <Th>NIT</Th>
                                <Th>Name</Th>
                                <Th>Address</Th>
                                <Th>Phone</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {companies.map((company) => (
                                <Tr key={company.NIT}>
                                    <Td>{company.NIT}</Td>
                                    <Td>{company.name}</Td>
                                    <Td>{company.address}</Td>
                                    <Td>{company.phone}</Td>
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

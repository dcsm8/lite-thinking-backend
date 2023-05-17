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

const Index = ({ companies, auth }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedCompany, setSelectedCompany] = useState(null);

    const handleDelete = () => {
        Inertia.delete(`/companies/${selectedCompany.NIT}`);
    };

    const handleClickDelete = (company) => {
        setSelectedCompany(company);
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
                            Companies
                        </Heading>
                        <InertiaLink href="/companies/create">
                            <Button colorScheme="green" size="sm">
                                Create company
                            </Button>
                        </InertiaLink>
                    </Flex>
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>NIT</Th>
                                <Th>Name</Th>
                                <Th>Address</Th>
                                <Th>Phone</Th>
                                <Th>Actions</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {companies.map((company) => (
                                <Tr key={company.NIT}>
                                    <Td>{company.NIT}</Td>
                                    <Td>{company.name}</Td>
                                    <Td>{company.address}</Td>
                                    <Td>{company.phone}</Td>
                                    <Td>
                                        <Stack direction="row" spacing={4}>
                                            <InertiaLink
                                                href={`/companies/${company.NIT}/edit`}
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
                                                    handleClickDelete(company)
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

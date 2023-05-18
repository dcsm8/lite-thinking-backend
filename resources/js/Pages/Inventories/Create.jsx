import React from "react";
import { useForm } from "react-hook-form";
import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Input,
    Heading,
    Flex,
    Select,
} from "@chakra-ui/react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import Layout from "../../components/Layout";

const Create = ({ auth, companies, products }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        Inertia.post("/inventories", data);
    };

    return (
        <Layout auth={auth}>
            <Container maxW="container.lg">
                <Box maxW="xl" mx="auto" mt={5}>
                    <Heading as="h1" size="xl" mb={5}>
                        Create Inventory
                    </Heading>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl mb={5}>
                            <FormLabel htmlFor="company_NIT">
                                Company NIT
                            </FormLabel>
                            <Select
                                id="company_NIT"
                                {...register("company_NIT", { required: true })}
                            >
                                {companies.map((company) => (
                                    <option
                                        key={company.NIT}
                                        value={company.NIT}
                                    >
                                        {company.name}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl mb={5}>
                            <FormLabel htmlFor="product_id">
                                Product ID
                            </FormLabel>
                            <Select
                                id="product_id"
                                {...register("product_id", { required: true })}
                            >
                                {products.map((product) => (
                                    <option key={product.id} value={product.id}>
                                        {product.name}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl mb={5}>
                            <FormLabel htmlFor="quantity">Quantity</FormLabel>
                            <Input
                                id="quantity"
                                {...register("quantity", { required: true })}
                            />
                        </FormControl>
                        <Flex justifyContent="flex-end">
                            <InertiaLink href="/inventories">
                                <Button colorScheme="red" mr={3}>
                                    Cancel
                                </Button>
                            </InertiaLink>
                            <Button type="submit" colorScheme="blue">
                                Update
                            </Button>
                        </Flex>
                    </form>
                </Box>
            </Container>
        </Layout>
    );
};

export default Create;

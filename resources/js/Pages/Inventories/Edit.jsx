import React, { useState } from "react";
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
} from "@chakra-ui/react";
import { Inertia } from "@inertiajs/inertia";
import Layout from "../../components/Layout";

const Edit = ({ inventory, auth }) => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            company_NIT: inventory.company_NIT,
            product_id: inventory.product_id,
            quantity: inventory.quantity,
        },
    });

    const onSubmit = (data) => {
        Inertia.put(`/inventories/${inventory.id}`, data);
    };

    return (
        <Layout auth={auth}>
            <Container maxW="container.lg">
                <Box maxW="xl" mx="auto" mt={5}>
                    <Heading as="h1" size="xl" mb={5}>
                        Edit Inventory {inventory.id}
                    </Heading>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl mb={5}>
                            <FormLabel htmlFor="company_NIT">
                                Company NIT
                            </FormLabel>
                            <Input
                                id="company_NIT"
                                {...register("company_NIT", { required: true })}
                            />
                        </FormControl>
                        <FormControl mb={5}>
                            <FormLabel htmlFor="product_id">
                                Product ID
                            </FormLabel>
                            <Input
                                id="product_id"
                                {...register("product_id", { required: true })}
                            />
                        </FormControl>
                        <FormControl mb={5}>
                            <FormLabel htmlFor="quantity">Quantity</FormLabel>
                            <Input
                                id="quantity"
                                {...register("quantity", { required: true })}
                            />
                        </FormControl>
                        <Flex justifyContent="flex-end">
                            <Button colorScheme="red" mr={3}>
                                Cancel
                            </Button>
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

export default Edit;

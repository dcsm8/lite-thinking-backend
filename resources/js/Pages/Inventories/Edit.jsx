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
    Text,
    HStack,
} from "@chakra-ui/react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
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
                        <HStack spacing={2}>
                            <Text fontWeight="bold">Company NIT</Text>
                            <Text>{inventory.company_NIT}</Text>
                        </HStack>
                        <HStack spacing={2}>
                            <Text fontWeight="bold">Product name</Text>
                            <Text>{inventory.product.name}</Text>
                        </HStack>
                        <FormControl mb={5}>
                            <FormLabel htmlFor="quantity">Quantity</FormLabel>
                            <Input
                                id="quantity"
                                {...register("quantity", { required: true })}
                            />
                        </FormControl>
                        <Flex justifyContent="flex-end">
                            <InertiaLink href="/companies">
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

export default Edit;

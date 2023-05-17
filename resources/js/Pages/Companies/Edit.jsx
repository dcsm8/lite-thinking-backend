import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Flex,
} from "@chakra-ui/react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import Layout from "../../components/Layout";

const Edit = ({ company, auth }) => {
    const { register, handleSubmit, setValue } = useForm({
        defaultValues: {
            NIT: company.NIT,
            name: company.name,
            address: company.address,
            phone: company.phone,
        },
    });

    const onSubmit = (data) => {
        Inertia.put(`/companies/${company.NIT}`, {
            ...data,
        });
    };

    return (
        <Layout auth={auth}>
            <Container maxW="container.lg">
                <Box maxW="xl" mx="auto" mt={5}>
                    <Heading as="h1" size="xl" mb={5}>
                        Edit Company {company.NIT}
                    </Heading>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl mb={5}>
                            <FormLabel htmlFor="NIT">NIT</FormLabel>
                            <Input
                                id="NIT"
                                {...register("NIT", { required: true })}
                                disabled
                            />
                        </FormControl>
                        <FormControl mb={5}>
                            <FormLabel htmlFor="name">Name</FormLabel>
                            <Input
                                id="name"
                                {...register("name", { required: true })}
                            />
                        </FormControl>
                        <FormControl mb={5}>
                            <FormLabel htmlFor="address">Address</FormLabel>
                            <Input
                                id="address"
                                {...register("address", { required: true })}
                            />
                        </FormControl>
                        <FormControl mb={5}>
                            <FormLabel htmlFor="phone">Phone</FormLabel>
                            <Input
                                id="phone"
                                {...register("phone", { required: true })}
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

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Heading,
    Input,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    NumberInput,
    NumberInputField,
    Flex,
} from "@chakra-ui/react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import Layout from "../../components/Layout";

const Edit = ({ user, auth }) => {
    const { register, handleSubmit, setValue } = useForm({
        defaultValues: {
            name: user.name,
            email: user.email,
            phone: user.phone,
            role: user.role,
        },
    });

    const onSubmit = (data) => {
        Inertia.put(`/users/${user.id}`, data);
    };

    return (
        <Layout auth={auth}>
            <Container maxW="container.lg">
                <Box maxW="xl" mx="auto" mt={5}>
                    <Heading as="h1" size="xl" mb={5}>
                        Edit User {user.id}
                    </Heading>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl mb={5}>
                            <FormLabel htmlFor="name">Name</FormLabel>
                            <Input
                                id="name"
                                placeholder="Enter user name"
                                {...register("name", { required: true })}
                            />
                        </FormControl>
                        <FormControl mb={5}>
                            <FormLabel htmlFor="email">Email address</FormLabel>
                            <Input
                                id="email"
                                placeholder="Enter user email"
                                {...register("email", { required: true })}
                            />
                        </FormControl>
                        <FormControl mb={5}>
                            <FormLabel htmlFor="phone">Phone</FormLabel>
                            <Input
                                id="phone"
                                placeholder="Enter user phone"
                                {...register("phone")}
                            />
                        </FormControl>
                        <FormControl mb={5}>
                            <FormLabel htmlFor="role">Role</FormLabel>
                            <Input
                                id="role"
                                placeholder="Enter user role"
                                {...register("role", { required: true })}
                            />
                        </FormControl>
                        <Flex justifyContent="flex-end">
                            <InertiaLink href="/users">
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

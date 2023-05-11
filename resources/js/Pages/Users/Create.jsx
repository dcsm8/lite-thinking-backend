import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "react-hook-form";
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Container,
    Box,
    Heading,
    Flex,
} from "@chakra-ui/react";
import { InertiaLink } from "@inertiajs/inertia-react";
import Layout from "../../components/Layout";

const CreateUser = ({ auth }) => {
    const { register, handleSubmit, formState } = useForm();

    const onSubmit = (data) => {
        Inertia.post("/users", data);
    };

    return (
        <Layout auth={auth}>
            <Container maxW="container.lg">
                <Box maxW="xl" mx="auto" mt={5}>
                    <Heading as="h1" size="xl" mb={5}>
                        Create User
                    </Heading>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl id="name" mb={5}>
                            <FormLabel>Name</FormLabel>
                            <Input
                                {...register("name", { required: true })}
                                type="text"
                                placeholder="Enter user name"
                            />
                        </FormControl>
                        <FormControl id="email" mb={5}>
                            <FormLabel>Email address</FormLabel>
                            <Input
                                {...register("email", { required: true })}
                                type="email"
                                placeholder="Enter user email"
                            />
                        </FormControl>
                        <FormControl id="password" mb={5}>
                            <FormLabel>Password</FormLabel>
                            <Input
                                {...register("password", { required: true })}
                                type="password"
                                placeholder="Enter user password"
                            />
                        </FormControl>
                        <FormControl id="password_confirmation" mb={5}>
                            <FormLabel>Confirm Password</FormLabel>
                            <Input
                                {...register("password_confirmation", {
                                    required: true,
                                })}
                                type="password"
                                placeholder="Confirm user password"
                            />
                        </FormControl>
                        <Flex justifyContent="flex-end">
                            <InertiaLink href="/users">
                                <Button colorScheme="red" mr={3}>
                                    Cancel
                                </Button>
                            </InertiaLink>
                            <Button
                                colorScheme="teal"
                                isLoading={formState.isSubmitting}
                                type="submit"
                            >
                                Create
                            </Button>
                        </Flex>
                    </form>
                </Box>
            </Container>
        </Layout>
    );
};

export default CreateUser;

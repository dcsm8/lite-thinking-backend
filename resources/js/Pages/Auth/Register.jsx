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
    Textarea,
} from "@chakra-ui/react";
import { InertiaLink } from "@inertiajs/inertia-react";

const Register = () => {
    const { register, handleSubmit, formState } = useForm();

    const onSubmit = (data) => {
        Inertia.post("/register", data);
    };

    return (
        <Container maxW="container.lg">
            <Box maxW="xl" mx="auto" mt={5}>
                <Heading as="h1" size="xl" mb={5}>
                    Register
                </Heading>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl id="name" mb={5}>
                        <FormLabel>Name</FormLabel>
                        <Input
                            {...register("name", { required: true })}
                            type="text"
                            placeholder="Enter your name"
                        />
                    </FormControl>
                    <FormControl id="email" mb={5}>
                        <FormLabel>Email address</FormLabel>
                        <Input
                            {...register("email", {
                                required: true,
                                pattern: /^\S+@\S+$/i,
                            })}
                            type="email"
                            placeholder="Enter your email"
                        />
                    </FormControl>
                    <FormControl id="password" mb={5}>
                        <FormLabel>Password</FormLabel>
                        <Input
                            {...register("password", { required: true })}
                            type="password"
                            placeholder="Enter your password"
                        />
                    </FormControl>
                    <FormControl id="password_confirmation" mb={5}>
                        <FormLabel>Confirm password</FormLabel>
                        <Input
                            {...register("password_confirmation", {
                                required: true,
                            })}
                            type="password"
                            placeholder="Confirm your password"
                        />
                    </FormControl>
                    <Flex justifyContent="flex-end">
                        <InertiaLink href="/login">
                            <Button colorScheme="gray" mr={3}>
                                Back to Login
                            </Button>
                        </InertiaLink>
                        <Button
                            colorScheme="teal"
                            isLoading={formState.isSubmitting}
                            type="submit"
                        >
                            Register
                        </Button>
                    </Flex>
                </form>
            </Box>
        </Container>
    );
};

export default Register;

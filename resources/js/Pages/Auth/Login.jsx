import React from "react";
import { Inertia } from "@inertiajs/inertia"; // Import Inertia
import { useForm } from "react-hook-form";
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Stack,
} from "@chakra-ui/react";
import { InertiaLink, usePage } from "@inertiajs/inertia-react"; // Import InertiaLink and usePage

const Login = () => {
    const { errors } = usePage().props;
    const { register, handleSubmit, formState } = useForm();

    const onSubmit = (data) => {
        Inertia.post("/login", data);
    };

    return (
        <Box
            p={8}
            borderWidth={1}
            borderRadius={8}
            width={{ base: "90%", md: "40%" }}
            margin="auto"
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={4}>
                    <FormControl isInvalid={errors.email}>
                        <FormLabel htmlFor="email">Email address</FormLabel>
                        <Input
                            type="email"
                            id="email"
                            {...register("email", { required: true })}
                        />
                        <FormErrorMessage>{errors.email}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.password}>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input
                            type="password"
                            id="password"
                            {...register("password", { required: true })}
                        />
                        <FormErrorMessage>{errors.password}</FormErrorMessage>
                    </FormControl>

                    <Button
                        colorScheme="teal"
                        isLoading={formState.isSubmitting}
                        type="submit"
                    >
                        Login
                    </Button>

                    <InertiaLink href="/register" fontWeight="bold">
                        Create an account
                    </InertiaLink>
                </Stack>
            </form>
        </Box>
    );
};

export default Login;

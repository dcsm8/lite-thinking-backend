import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/react";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Stack,
    Spinner,
} from "@chakra-ui/react";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";

const Login = () => {
    const { errors } = usePage().props;

    const { data, setData, post, processing } = useForm({
        email: "",
        password: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        post("/login");
    };

    const handleChange = (e) => {
        setData(e.target.id, e.target.value);
    };

    return (
        <Flex minHeight="100vh" alignItems="center" justifyContent="center">
            <Box
                p={8}
                borderWidth={1}
                borderRadius={8}
                width={{ base: "90%", md: "40%" }}
                boxShadow="xl"
            >
                <form onSubmit={onSubmit}>
                    <Stack spacing={4}>
                        <FormControl isInvalid={errors.email}>
                            <FormLabel htmlFor="email">Email address</FormLabel>
                            <Input
                                type="email"
                                id="email"
                                value={data.email}
                                onChange={handleChange}
                            />
                            <FormErrorMessage>{errors.email}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={errors.password}>
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <Input
                                type="password"
                                id="password"
                                value={data.password}
                                onChange={handleChange}
                            />
                            <FormErrorMessage>
                                {errors.password}
                            </FormErrorMessage>
                        </FormControl>

                        <Button
                            colorScheme="teal"
                            type="submit"
                            isLoading={processing}
                            loadingText="Submitting..."
                        >
                            Login
                        </Button>

                        <InertiaLink href="/register" fontWeight="bold">
                            Create an account
                        </InertiaLink>
                    </Stack>
                </form>
            </Box>
        </Flex>
    );
};

export default Login;

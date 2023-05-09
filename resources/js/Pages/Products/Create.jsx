import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "react-hook-form";
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Textarea,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Container,
    Box,
} from "@chakra-ui/react";

const Create = () => {
    const { register, handleSubmit, formState } = useForm();

    const onSubmit = (data) => {
        Inertia.post("/products", data);
    };

    return (
        <Container maxW="container.lg">
            <Box py={8}>
                <h1>Create Product</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl id="name">
                        <FormLabel>Name</FormLabel>
                        <Input
                            {...register("name", { required: true })}
                            type="text"
                            placeholder="Enter product name"
                        />
                    </FormControl>
                    <FormControl id="description">
                        <FormLabel>Description</FormLabel>
                        <Textarea
                            {...register("description", { required: true })}
                            placeholder="Enter product description"
                        />
                    </FormControl>
                    <FormControl id="price">
                        <FormLabel>Price</FormLabel>
                        <NumberInput>
                            <NumberInputField
                                {...register("price", {
                                    required: true,
                                    min: 0,
                                })}
                                type="number"
                                placeholder="Enter product price"
                            />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>
                    <Button
                        mt={4}
                        colorScheme="teal"
                        isLoading={formState.isSubmitting}
                        type="submit"
                    >
                        Create
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default Create;

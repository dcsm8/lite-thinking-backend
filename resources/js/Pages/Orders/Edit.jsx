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

const Edit = ({ order }) => {
    const { register, handleSubmit, setValue } = useForm({
        defaultValues: {
            name: order.name,
            description: order.description,
            price: order.price,
        },
    });

    const onSubmit = (data) => {
        Inertia.put(`/orders/${order.id}`, data);
    };

    useEffect(() => {
        setValue("name", order.name);
        setValue("description", order.description);
        setValue("price", order.price);
    }, [order]);

    return (
        <Container maxW="container.lg">
            <Box maxW="xl" mx="auto" mt={5}>
                <Heading as="h1" size="xl" mb={5}>
                    Edit Order {order.id}
                </Heading>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl mb={5}>
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <Input
                            id="name"
                            placeholder="Enter order name"
                            {...register("name", { required: true })}
                        />
                    </FormControl>
                    <FormControl mb={5}>
                        <FormLabel htmlFor="description">Description</FormLabel>
                        <Input
                            id="description"
                            placeholder="Enter order description"
                            {...register("description")}
                        />
                    </FormControl>
                    <FormControl id="price" mb={5}>
                        <FormLabel>Price</FormLabel>
                        <NumberInput>
                            <NumberInputField
                                {...register("price", {
                                    required: true,
                                    min: 0,
                                })}
                                placeholder="Enter order price"
                            />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>
                    <Flex justifyContent="flex-end">
                        <InertiaLink href="/orders">
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
    );
};

export default Edit;

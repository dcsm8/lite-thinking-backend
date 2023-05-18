import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    useBreakpointValue,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

const routes = [
    {
        name: "Products",
        url: "/products",
    },
    {
        name: "Categories",
        url: "/categories",
    },
    {
        name: "Orders",
        url: "/orders",
    },
    {
        name: "Users",
        url: "/users",
    },
    {
        name: "Companies",
        url: "/companies",
    },
    {
        name: "Inventories",
        url: "/inventories",
    },
];

const AdminNavbar = ({ auth }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const isDesktop = useBreakpointValue({ base: false, lg: true });

    const MenuItems = routes.map((item) => (
        <InertiaLink href={item.url} key={item.name} onClick={onClose}>
            <Button variant="ghost" w="100%" mt={4}>
                {item.name}
            </Button>
        </InertiaLink>
    ));

    const handleLogout = (event) => {
        event.preventDefault();
        Inertia.post("/logout");
    };

    return (
        <Box as="section" pb={{ base: "5" }}>
            <Box as="nav" bg="bg-surface" boxShadow="sm">
                <Container py={{ base: "4", lg: "5" }}>
                    <HStack spacing="10" justify="center">
                        {isDesktop ? (
                            <Flex>
                                <ButtonGroup variant="link" spacing="8">
                                    {routes.map((item) => (
                                        <InertiaLink
                                            href={item.url}
                                            key={item.name}
                                        >
                                            <Button>{item.name}</Button>
                                        </InertiaLink>
                                    ))}
                                    <Button
                                        variant="link"
                                        spacing="8"
                                        onClick={handleLogout}
                                    >
                                        Log out
                                    </Button>
                                </ButtonGroup>
                            </Flex>
                        ) : (
                            <Flex width="100%" justifyContent="flex-end">
                                <HamburgerIcon
                                    variant="ghost"
                                    aria-label="Open Menu"
                                    onClick={onOpen}
                                />
                            </Flex>
                        )}
                    </HStack>
                </Container>
            </Box>

            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Navigation</DrawerHeader>

                        <DrawerBody>{MenuItems}</DrawerBody>

                        <DrawerFooter justifyContent="space-between">
                            <Button variant="ghost" onClick={handleLogout}>
                                Log out
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </Box>
    );
};

export default AdminNavbar;

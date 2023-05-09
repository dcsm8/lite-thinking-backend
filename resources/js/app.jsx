import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

createInertiaApp({
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const InertiaAppWithChakra = () => (
            <ChakraProvider>
                <CSSReset />
                <App {...props} />
            </ChakraProvider>
        );

        createRoot(el).render(<InertiaAppWithChakra />);
    },
});

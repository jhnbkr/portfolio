module.exports = {
    content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
    theme: {
        fontFamily: {
            sans: ["var(--open-sans-font)", "ui-sans-serif", "system-ui"],
            serif: ["ui-serif", "Georgia"],
            mono: ["ui-monospace", "SFMono-Regular"],
        },
        extend: {
            screens: {
                print: { raw: "print" },
            },
            spacing: {
                22: "5.5rem",
            },
        },
    },
    plugins: [],
};

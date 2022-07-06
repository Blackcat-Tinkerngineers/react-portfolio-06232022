export let webpack = {
    configure: {
        module: {
            rules: [
                {
                    type: 'javascript/auto',
                    test: /\.mjs$/,
                    include: /node_modules/,
                },
            ],
        },
    },
};
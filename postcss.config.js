import postcssImport from "postcss-import"
import cssnano from "cssnano"
import postcssPresetEnv from "postcss-preset-env"
import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"

export default {
    plugins: [
        postcssImport({}),
        cssnano({
            preset: "default",
        }),
        postcssPresetEnv({ stage: 1}),
        tailwindcss({}),
        autoprefixer({}),
    ],
};
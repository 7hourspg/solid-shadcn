/** @type {import('prettier').Config} */
module.exports = {
    endOfLine: "lf",
    semi: false,
    singleQuote: false,
    tabWidth: 2,
    trailingComma: "es5",
    plugins: ["@ianvs/prettier-plugin-sort-imports"],
    importOrder: [
        "^(solid-js/web|solid-js)$",
        "^@solidjs/(.*)$",
        "<THIRD_PARTY_MODULES>",
        "",
        "^@/types/(.*)$",
        "^@/lib/(.*)$",
        "^@/components/ui/(.*)$",
        "^@/components/(.*)$",
        "^@/pages/(.*)$",
        "",
        "^[./]"
    ],
    importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"]
} 
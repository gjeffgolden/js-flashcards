export interface KeyTerm {
    cardFront: string,
    cardBack: string,
    cardBack2: string
}

const keyTerms = [
    {
        cardFront: "Static Generation (SSG)",
        cardBack: "Pre-rendering method that generates HTML at build time.",
        cardBack2: "Use if page can be rendered without relying on user input."
    },
    {
        cardFront: "Hoisting",
        cardBack: "All declarations are moved to the top of current scope as script runs.",
        cardBack2: "Variables can be assigned before being declared."
    },
    {
        cardFront: "Promise",
        cardBack: "Object that represents future outcome of async operation.",
        cardBack2: "Three States: 1. Pending, 2. Fulfilled, 3. Rejected."
    },
    {
        cardFront: "",
        cardBack: "",
        cardBack2: ""
    },
]


export default keyTerms;
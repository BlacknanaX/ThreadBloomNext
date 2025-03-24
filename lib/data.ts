export const Type = [
    {
        id: "A",
        name: "Technics"
    },
    {
        id: "B",
        name: "Difficulty"
    },
    {
        id: "C",
        name: "Purpose"
    },
    {
        id:"D",
        name: "Books"
    },
    {
        id: "E",
        name:"Tools"
    }
];
export const NavList = [
    // Parent nav list
    {
        id: "a",
        name: "Handmade & Kits",
        level: "0",
        pid: "",
        type_id:"",
    },
    {
        id: "b",
        name: "Books & Tools",
        level: "0",
        pid: "",
        type_id:"",
    },
    // Handmade products by purpose
    {
        id: "aC1",
        name: "Charm",
        level: "1",
        pid: "a",
        type_id: "C",
    },
    {
        id: "aC2",
        name: "Hair Accessories",
        level: "1",
        pid: "a",
        type_id: "C",
    },
    {
        id: "aC3",
        name: "Home",
        level: "1",
        pid: "a",
        type_id: "C",
    },
    {
        id: "aC4",
        name: "Necklaces",
        level: "1",
        pid: "a",
        type_id: "C",
    },
    {
        id: "aC5",
        name: "Bracelets",
        level: "1",
        pid: "a",
        type_id: "C",
    },
    {
        id: "aC6",
        name: "Rings",
        level: "1",
        pid: "a",
        type_id: "C",
    },
    // Handmade products by difficulty
    {
        id: "aB1",
        name: "Beginner",
        level: "1",
        pid: "a",
        type_id: "B",
    },
    {
        id: "aB2",
        name: "Intermediate",
        level: "1",
        pid: "a",
        type_id: "B",
    },
    // Handmade by technics
    {
        id: "aA1",
        name: "Crochet & Knitting",
        level: "1",
        pid: "a",
        type_id: "A",
    },
    {
        id: "aA2",
        name: "Tatting",
        level: "1",
        pid: "a",
        type_id: "A",
    },
    {
        id: "aA3",
        name: "Sennit",
        level: "1",
        pid: "a",
        type_id: "A",
    },
    // Books and Tools
    {
        id: "bD1",
        name: "Books",
        level: "1",
        pid: "b",
        type_id: "D",
    },
    {
        id: "bE1",
        name: "Tools",
        level: "1",
        pid: "b",
        type_id: "E",
    },
];

export const ProductData=[
    {
        id:1,
        name: "Adidas",
        Description: "Comfortable sport & casual wear shoe",
        price: 3500,
        category: "fashion",
        stock: 25,
        imageUrl: "https://www.pinterest.com/johnmaofficial/shoes-adidas/"
    },
    {
        id:2,
        name: "Nike",
        Description: "Comfortable sport & casual wear shoe",
        price: 4000,
        category: "fashion",
        stock: 30,
        imageUrl: "https://www.google.com/imgres?q=nike%20shoes&imgurl=https%3A%2F%2Fi.pinimg.com%2F736x%2F1d%2F22%2Fd9%2F1d22d9a8a2990b791ccfb2ccf4b5f05b.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F155937205842999589%2F&docid=l4J-SRA-DdX1IM&tbnid=WW3NKPKUB9pgCM&vet=12ahUKEwij0IWd0rGWAxVyRmwGHWnTN-AQnPAOegUI2wEQAA..i&w=474&h=842&hcb=2&ved=2ahUKEwij0IWd0rGWAxVyRmwGHWnTN-AQnPAOegUI2wEQAA"
    }
]

let nextId=3;

export const getNextId=()=>nextId++;
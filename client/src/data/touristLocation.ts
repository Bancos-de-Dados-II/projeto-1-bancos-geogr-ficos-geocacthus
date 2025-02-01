import { LatLngTuple } from "leaflet";

const touristLocations = [
    {
        id: 1,
        name: "Praia de Tambaú",
        description: "Uma das praias mais famosas de João Pessoa, com uma linda orla e opções de lazer.",
        position: [-7.115, -34.843] as LatLngTuple, // Coordenadas de Praia de Tambaú em João Pessoa
    },
    {
        id: 2,
        name: "Centro Histórico de João Pessoa",
        description: "Região histórica com igrejas e construções coloniais, como a Igreja de São Francisco.",
        position: [-7.119, -34.845] as LatLngTuple, // Coordenadas do Centro Histórico de João Pessoa
    },
    {
        id: 3,
        name: "Parque Nacional de Jericoacoara",
        description: "Um dos principais parques do estado, com dunas, lagoas e fauna diversificada.",
        position: [-7.230, -35.019] as LatLngTuple, // Coordenadas de Jericoacoara
    },
    {
        id: 4,
        name: "Monumento Natural Vale dos Dinossauros",
        description: "Sítio arqueológico em Sousa, com pegadas fossilizadas de dinossauros.",
        position: [-6.734, -38.248] as LatLngTuple, // Coordenadas do Vale dos Dinossauros em Sousa
    },
    {
        id: 5,
        name: "Praia de Coqueirinho",
        description: "Praia tranquila, com águas claras e excelente para banho.",
        position: [-7.443, -34.950] as LatLngTuple, // Coordenadas de Praia de Coqueirinho
    },
    {
        id: 6,
        name: "Ilha de Areia Vermelha",
        description: "Ilha de águas cristalinas acessível por barcos, muito procurada para passeios e turismo.",
        position: [-7.249, -34.811] as LatLngTuple, // Coordenadas da Ilha de Areia Vermelha
    },
    {
        id: 7,
        name: "Cabo Branco",
        description: "Ponto onde o sol nasce primeiro no Brasil, com belíssima vista para o oceano.",
        position: [-7.116, -34.855] as LatLngTuple, // Coordenadas de Cabo Branco em João Pessoa
    },
    {
        id: 8,
        name: "Praia de Pipa",
        description: "Famosa pela beleza das suas falésias, águas claras e a presença de golfinhos.",
        position: [-6.219, -35.088] as LatLngTuple, // Coordenadas da Praia de Pipa
    },
    {
        id: 9,
        name: "Pedra da Boca",
        description: "Formação rochosa situada em Araruna, excelente para o turismo de aventura.",
        position: [-6.656, -35.667] as LatLngTuple, // Coordenadas da Pedra da Boca
    },
    {
        id: 10,
        name: "Lajedo de Pai Mateus",
        description: "Um dos maiores monumentos geológicos do Brasil, situado em Cabaceiras.",
        position: [-7.274, -36.200] as LatLngTuple, // Coordenadas do Lajedo de Pai Mateus em Cabaceiras
    },
    {
        id: 11,
        name: "Praia de Barra de Camaratuba",
        description: "Uma praia tranquila e com águas calmas, localizada no litoral sul da Paraíba.",
        position: [-6.717, -35.057] as LatLngTuple, // Coordenadas da Praia de Barra de Camaratuba
    },
    {
        id: 12,
        name: "Ilha de Itamaracá",
        description: "Conhecida pela beleza de suas praias e pelo Forte Orange, construída pelos holandeses.",
        position: [-6.422, -35.090] as LatLngTuple, // Coordenadas da Ilha de Itamaracá
    },
    {
        id: 13,
        name: "Cavalo Cansado",
        description: "Formação rochosa em Aroeiras, com vistas panorâmicas e grande apelo turístico.",
        position: [-7.048, -35.733] as LatLngTuple, // Coordenadas de Cavalo Cansado
    },
    {
        id: 14,
        name: "Rota do Sol",
        description: "Estrada turística que percorre belas paisagens do litoral norte da Paraíba.",
        position: [-6.955, -34.970] as LatLngTuple, // Coordenadas da Rota do Sol
    },
    {
        id: 15,
        name: "Engenho Triunfo",
        description: "Engenho histórico em Areia, que produzia cana-de-açúcar e possui grande valor cultural.",
        position: [-6.734, -35.589] as LatLngTuple, // Coordenadas do Engenho Triunfo
    },
    {
        id: 16,
        name: "Monumento de Padre Cícero",
        description: "Monumento icônico de Juazeiro do Norte, homenageando o Padre Cícero, figura religiosa importante no Nordeste.",
        position: [-7.207, -39.312] as LatLngTuple, // Coordenadas do Monumento de Padre Cícero em Juazeiro do Norte, Ceará
    },
    {
        id: 17,
        name: "Teatro Municipal de Patos",
        description: "Teatro histórico de Patos, famoso por sua arquitetura e por sediar eventos culturais e artísticos.",
        position: [-7.021, -37.277] as LatLngTuple, // Coordenadas do Teatro Municipal de Patos
    },
]

export default touristLocations
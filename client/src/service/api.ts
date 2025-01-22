import { LatLngTuple } from "leaflet";

interface IApiResponse {
    id: string;
    name: string;
    description: string;
    category: string;
    image: string;
    phone: string;
    address: {
        street: string;
        number: string;
        city: string;
        state: string;
        country: string;
        postalcode: string;
    };
    location: {
        crs: {
            type: string;
            properties: {
                name: string;
            };
        };
        type: string;
        coordinates: LatLngTuple;
    };
}

interface ITouristCreate {
    id: string;
    name: string;
    description: string;
    category: string;
    image: string;
    phone: string;
    address: {
        street: string;
        number: string;
        city: string;
        state: string;
        country: string;
        postalcode: string;
    };
}

interface ITouristLocationBase {
    id: string;
    name: string;
    description: string;
    category: string;
    image: string;
    phone: string;
    address: {
        street: string;
        number: string;
        city: string;
        state: string;
        country: string;
        postalCode: string;
    };
    position: LatLngTuple;
}

const dataTouristLocations: ITouristLocationBase[] = [];

const fetchTouristLocations = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/tourist-place");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: IApiResponse[] = await response.json();
        dataTouristLocations.length = 0; // Limpa os dados antigos

        // grantir que os dados do caampo position sejam encontrados pelo caminho correto
        const formattedData = data.map(instance => ({
            id: instance.id,
            name: instance.name,
            description: instance.description,
            category: instance.category,
            image: instance.image,
            phone: instance.phone,
            address: {
                street: instance.address.street,
                number: instance.address.number,
                city: instance.address.city,
                state: instance.address.state,
                country: instance.address.country,
                postalCode: instance.address.postalcode,
            },
            position: instance.location.coordinates as LatLngTuple, // Coordenadas do ponto no mapa
        }));

        dataTouristLocations.push(...formattedData);
        return dataTouristLocations;
    } catch (error) {
        console.log("Erro na busca de dados do endpoint: ", error);
        return null
    }
}

const createTouristLocation = async (touristPlace: ITouristCreate) => {
    const endpoint = "http://localhost:3000/api/tourist-place";
    const token = "my_token";

    const body = {
        name: touristPlace.name,                        //"Cristo Redentor"
        description: touristPlace.description,          //"Monumento famoso no Rio de Janeiro"
        category: touristPlace.category,                //"Monumento"
        image: touristPlace.image,                      //"https://exemplo.com/imagem.jpg"
        phone: touristPlace.phone,                      //"83996108613"
        address: {
            street: touristPlace.address.street,        // "Av. Paulista"
            number: touristPlace.address.number,        //"1000"
            city: touristPlace.address.city,            //"São Paulo"
            state: touristPlace.address.state,          //"SP"
            country: touristPlace.address.country,      //"Brasil"
            postalcode: touristPlace.address.postalcode //"01310-000"
        }
    };
    
    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "ContentType": "aplication/json",
                Autorization: `Bearer ${token}`,
            },
            body: JSON.stringify(body),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Novo local turístico cadstrado com sucesso: ", data);
    } catch (error) {
        console.log("Erro ao cadastrar novo local turístico: ", error);
    }
}


export default { fetchTouristLocations, createTouristLocation };
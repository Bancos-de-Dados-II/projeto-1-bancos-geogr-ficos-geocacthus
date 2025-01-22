import { LatLngTuple } from "leaflet";

interface IApiResponse {
    id: string;
    name: string;
    description: string;
    category: string;
    image: string;
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

interface ITouristLocationBase {
    id: string;
    name: string;
    description: string;
    category: string;
    image: string;
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


export default { fetchTouristLocations };
import axios from "axios";
import HttpError from "../utils/error/httpError";

interface Address {
    street: string;
    city: string;
    state: string;
    country: string;
    postalcode: string;
}

class GeocodingService {
    async getCoordinates(address: Address): Promise<{ lat: number; lon: number }> {
        const { street, city, state, country, postalcode } = address;
        console.log(`Buscando coordenadas para o endereço: ${street}, ${city}, ${state}, ${country}`);
        
        try {
            const response = await axios.get("https://nominatim.openstreetmap.org/search", {
                params: {
                    street,
                    city,
                    state,
                    country,
                    postalcode,
                    format: "json",
                    addressdetails: 1,
                    limit: 1,
                },
                timeout: 10000,
            });

            console.log("Resposta da API Nominatim:", response.data);

            if (!response.data || response.data.length === 0) {
                throw new HttpError("Endereço não encontrado. Por favor, revise o endereço informado.", 404);
            }

            const location = response.data[0];
            return {
                lat: parseFloat(location.lat),
                lon: parseFloat(location.lon),
            };
        } catch (error: any) {
            console.error("Erro ao buscar coordenadas:", error.message || error);
            if (error.code === "ECONNABORTED") {
                throw new HttpError("O serviço de geocodificação demorou muito para responder.", 408);
            }
            throw new HttpError("Erro ao buscar coordenadas. Tente novamente mais tarde.", 500, error);
        }
    }
}

export default GeocodingService;

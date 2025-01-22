import { ModelStatic } from "sequelize";
import TouristPlace from "../models/touristPlace";
import User from "../models/user";
import HttpError from "../utils/error/httpError";

interface TouristPlaceCreationData extends Partial<TouristPlace> {
    location?: { lat: number; lon: number };
}

class TouristPlaceService {
    private touristPlaceModel: ModelStatic<TouristPlace>;

    constructor(touristPlaceModel: ModelStatic<TouristPlace>) {
        this.touristPlaceModel = touristPlaceModel;
    }

    async fetchAllTouristLocations() {
        return await this.touristPlaceModel.findAll();
    }
    
    async fetchTouristLocationById(id: string) {
        const location = await this.touristPlaceModel.findByPk(id);
        if (!location) {
            throw new Error("Local turístico não encontrado");
        }
        return location;
    }
    
    async createTouristLocation(data: TouristPlaceCreationData, user: User) {
        const { location, ...otherData } = data;
    
        if (!location || !location.lat || !location.lon) {
            throw new HttpError("Coordenadas inválidas.", 400);
        }
    
        const newLocation = await this.touristPlaceModel.create({
            ...otherData,
            location: { type: "Point", coordinates: [location.lon, location.lat] },
            userID: user.id,
        });
    
        return newLocation;
    }
    
    
    async updateTouristLocation(id: string, data: Partial<TouristPlace>) {
        const location = await this.touristPlaceModel.findByPk(id);
        if (!location) {
            throw new Error("Local turístico não encontrado");
        }
        return await location.update(data);
    }
    
    async deleteTouristLocation(id: string) {
        const location = await this.touristPlaceModel.findByPk(id);
        if (!location) {
            throw new Error("Local turístico não encontrado");
        }
        await location.destroy();
        return true;
    }    
}


export default TouristPlaceService;
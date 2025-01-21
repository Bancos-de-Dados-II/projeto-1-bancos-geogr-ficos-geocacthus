import { ModelStatic } from "sequelize";
import TouristPlace from "../models/touristPlace";
import User from "../models/user";

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
    
    async createTouristLocation(data: Partial<TouristPlace>, user: User) {
        const newLocation = await this.touristPlaceModel.create({
            ...data,
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
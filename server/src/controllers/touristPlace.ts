import { ModelStatic } from "sequelize";
import { TouristPlace as TouristPlaceModel } from "../models/touristPlace";

interface ITouristPlace {
    name: string;
    description: string;
    category: string;
    image: string;
    phone: string;
    latitude: number;
    longitude: number;
}

interface ITouristPlaceAuth {
    id: string;
    name?: string;
    description?: string;
    category?: string;
    image?: string;
    phone?: string;
    latitude?: number;
    longitude?: number;
}

class TouristPlace {
    private tourist
    constructor(touristLocationModel: ModelStatic<TouristPlaceModel>) {
        this.tourist = touristLocationModel;
    }

    async createTouristLocation(touristPlaceDTO: ITouristPlace, userId: string) {
        const { name, description, category, image, phone, latitude, longitude } = touristPlaceDTO;

        if (!name || !description || !category || !image || !phone || !latitude || !longitude) return { status: 400, message: "Missing required fields" };

        try {
            const newTouristLocation = await this.tourist.create({ 
                name, 
                description, 
                category, 
                image, 
                phone, 
                latitude, 
                longitude,
                userId,
            });

            return { status: 201, message: "Tourist location created successfully", data: newTouristLocation };
        } catch (error) {
            console.log(error);
            return { status: 500, message: "Internal Server Error", error: (error as Error).message };
        }
    }

    async getTouristLocation() {
        try {
            const touristLocations = await this.tourist.findAll();

            return { status: 200, message: "Tourist locations retrieved successfully", data: touristLocations };
        } catch (error) {
            console.log(error);
            return { status: 500, message: "Internal Server Error", error: (error as Error).message };
        }
    }

    async getTouristLocationById(touristPlaceId: string) {
        try {
            const touristLocation = await this.tourist.findOne({
                where: { id: touristPlaceId },
            });

            if (!touristLocation) return { status: 404, message: "Tourist location not found", data: null };

            return { status: 200, message: "Tourist location retrieved successfully", data: touristLocation };
        } catch (error) {
            console.log(error);
            return { status: 500, message: "Internal Server Error", error: (error as Error).message };
        }
    }

    async updateTouristLocation(touristPlaceAuth: ITouristPlaceAuth, updates: ITouristPlace) {
        try {
            const touristLocation = (await this.getTouristLocationById(touristPlaceAuth.id)).data;

            if (!touristLocation) return { status: 404, message: "Tourist location not found" };

            await touristLocation.update(updates);

            return { status: 200, message: "Tourist location updated successfully", data: touristLocation };
        } catch (error) {
            console.log(error);
            return { status: 500, message: "Internal Server Error", error: (error as Error).message };
        }
    }

    async deleteTouristLocation(touristPlaceAuth: ITouristPlaceAuth) {
        try {
            const touristLocation = (await this.getTouristLocationById(touristPlaceAuth.id)).data;

            if (!touristLocation) return { status: 404, message: "Tourist location not found" };

            await touristLocation.destroy();

            return { status: 200, message: "Tourist location deleted successfully" };
        } catch (error) {
            console.log(error);
            return { status: 500, message: "Internal Server Error", error: (error as Error).message };
        }
    }
    
}

export default TouristPlace;
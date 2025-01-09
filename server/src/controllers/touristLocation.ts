class TouristLocation {
    constructor(touristLocationModel) {
        this.touristLocation = touristLocationModel;
    }

    async createTouristLocation(touristLocationDTO, userId) {
        const { name, description, category, image, phone, latitude, longitude } = await touristLocationDTO;

        if (!name || !description || !category || !image || !phone || !latitude || !longitude) return { status: 400, message: "Missing required fields" };

        try {
            const newTouristLocation = await this.touristLocation.create({ 
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
            return { status: 500, message: "Internal Server Error", error: error.message };
        }
    }

    async getTouristLocation() {
        try {
            const touristLocations = await this.touristLocation.findAll();

            return { status: 200, message: "Tourist locations retrieved successfully", data: touristLocations };
        } catch (error) {
            console.log(error);
            return { status: 500, message: "Internal Server Error", error: error.message };
        }
    }

    async getTouristLocationById(touristLocationId) {
        try {
            const touristLocation = await this.touristLocation.findOne({
                where: { id: touristLocationId },
            });

            if (!touristLocation) return { status: 404, message: "Tourist location not found", data: null };

            return { status: 200, message: "Tourist location retrieved successfully", data: touristLocation };
        } catch (error) {
            console.log(error);
            return { status: 500, message: "Internal Server Error", error: error.message };
        }
    }

    async updateTouristLocation(touristLocationAuth, updates) {
        try {
            const touristLocation = (await this.getTouristLocationById(touristLocationAuth.id)).data;

            if (!touristLocation) return { status: 404, message: "Tourist location not found" };

            await touristLocation.update(updates);

            return { status: 200, message: "Tourist location updated successfully", data: touristLocation };
        } catch (error) {
            console.log(error);
            return { status: 500, message: "Internal Server Error", error: error.message };
        }
    }

    async deleteTouristLocation(touristLocationAuth) {
        try {
            const touristLocation = (await this.getTouristLocationById(touristLocationAuth.id)).data;

            if (!touristLocation) return { status: 404, message: "Tourist location not found" };

            await touristLocation.destroy();

            return { status: 200, message: "Tourist location deleted successfully" };
        } catch (error) {
            console.log(error);
            return { status: 500, message: "Internal Server Error", error: error.message };
        }
    }
    
}
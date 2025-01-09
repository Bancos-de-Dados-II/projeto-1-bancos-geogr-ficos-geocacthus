class Hours {
    constructor(hoursModel) {
        this.hours = hoursModel;
    }

    async createHour(hoursDTO, touristId) {
        const { day, firstHours, lastHours } = await hoursDTO;

        if (!day || !firstHours || !lastHours) return { status: 400, message: "Missing required fields" };

        try {
            const newHour = await this.hours.create({ 
                day, 
                firstHours, 
                lastHours,
                touristId,
            });

            return { status: 201, message: "Hours created successfully", data: newHour };
        } catch (error) {
            console.log(error);
            return { status: 500, message: "Internal Server Error", error: error.message };
        }
    }

    async getHours(touristId) {
        try {
            const hours = await this.hours.findAll({
                where: { touristId },
            });

            return { status: 200, message: "Hours retrieved successfully", data: hours };
        } catch (error) {
            console.log(error);
            return { status: 500, message: "Internal Server Error", error: error.message };
        }
    }
}
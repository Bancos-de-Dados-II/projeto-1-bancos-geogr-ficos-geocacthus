class EvaluatesTouristLocation {
    constructor(evaluatesModel) {
        this.evaluates = evaluatesModel;
    }

    async createEvaluate(evaluateDTO, touristLocationId, userId) {
        const { rating, date } = await evaluateDTO;

        if (!rating || !date) return { status: 400, message: "Missing required fields" };

        try {
            const newEvaluate = await this.evaluates.create({ 
                rating, 
                date,
                userId,
                touristLocationId,
            });

            return { status: 201, message: "Evaluate created successfully", data: newEvaluate };
        } catch (error) {
            console.log(error);
            return { status: 500, message: "Internal Server Error", error: error.message };
        }
    }

    async getEvaluates(touristLocationId) {
        try {
            const evaluates = await this.evaluates.findAll({
                where: { touristLocationId },
            });

            return { status: 200, message: "Evaluates retrieved successfully", data: evaluates };
        } catch (error) {
            console.log(error);
            return { status: 500, message: "Internal Server Error", error: error.message };
        }
    }

    async deleteEvaluate(userID, touristLocationId, date) {
        try {
            const userEvaluates = await this.evaluates.findAll({
                where: { userID },
            });

            if (!userEvaluates.length) return { status: 404, message: "No evaluates found for this user" };

            const locationEvaluates = await userEvaluates.findAll({
                where: { touristLocationId },
            });

            if (!locationEvaluates.length) return { status: 404, message: "No evaluates found for this tourist location" };

            const evaluate = await locationEvaluates.findOne({
                where: { date: date },
            });

            if (!evaluate) return { status: 404, message: "Evaluate not found for this date" };

            await evaluate.destroy();

            return { status: 200, message: "Evaluates deleted successfully" };
        } catch (error) {
            console.log(error);
            return { status: 500, message: "Internal Server Error", error: error.message };
        }
    }
}
import { ModelStatic } from "sequelize";
import { Schedules as SchedulesModel } from "../models/schedule";

interface ISchedulesDTO {
    day: string;
    firstHours: string;
    lastHours: string;
}

class Schedules {
    private schedule: ModelStatic<SchedulesModel>;

    constructor(scheduleModel: ModelStatic<SchedulesModel>) {
        this.schedule = scheduleModel;
    }

    async createHour(scheduleDTO: ISchedulesDTO, touristId: string) {
        const { day, firstHours, lastHours } = scheduleDTO;

        if (!day || !firstHours || !lastHours) return { status: 400, message: "Missing required fields" };

        try {
            const newSchedule = await this.schedule.create({ 
                day, 
                firstHours, 
                lastHours,
                touristId,
            });

            return { status: 201, message: "Schedule created successfully", data: newSchedule };
        } catch (error) {
            console.log(error);
            return { status: 500, message: "Internal Server Error", error: (error as Error).message };
        }
    }

    async getReview(touristId: string) {
        try {
            const schedules = await this.schedule.findAll({
                where: { touristId },
            });

            return { status: 200, message: "Schedules retrieved successfully", data: schedules };
        } catch (error) {
            console.log(error);
            return { status: 500, message: "Internal Server Error", error: (error as Error).message };
        }
    }
}

export default Schedules;
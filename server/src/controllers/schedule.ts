import { ModelStatic } from "sequelize";
import { Schedules as SchedulesModel } from "../models/schedule";

interface ISchedulesDTO {
    day: string;
    firstHours: string;
    lastHours: string;
}

class Review {
    private schedule: ModelStatic<SchedulesModel>;

    constructor(scheduleModel: ModelStatic<SchedulesModel>) {
        this.schedule = scheduleModel;
    }

    async createHour(scheduleDTO: ISchedulesDTO, touristId: string) {
        const { day, firstHours, lastHours } = scheduleDTO;

        if (!day || !firstHours || !lastHours) return { status: 400, message: "Missing required fields" };

        try {
            const newHour = await this.schedule.create({ 
                day, 
                firstHours, 
                lastHours,
                touristId,
            });

            return { status: 201, message: "Hours created successfully", data: newHour };
        } catch (error) {
            console.log(error);
            return { status: 500, message: "Internal Server Error", error: (error as Error).message };
        }
    }

    async getHours(touristId: string) {
        try {
            const hours = await this.schedule.findAll({
                where: { touristId },
            });

            return { status: 200, message: "Hours retrieved successfully", data: hours };
        } catch (error) {
            console.log(error);
            return { status: 500, message: "Internal Server Error", error: (error as Error).message };
        }
    }
}
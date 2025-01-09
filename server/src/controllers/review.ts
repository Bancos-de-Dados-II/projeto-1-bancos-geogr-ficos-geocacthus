import { ModelStatic } from "sequelize";
import { Review as ReviewModel } from "../models/review";

interface IReviewDTO {
    rating: number;
    date: Date;
}

class Review {
    private review: ModelStatic<ReviewModel>;

    constructor(hoursModel: ModelStatic<ReviewModel>) {
        this.review = hoursModel;
    }

    async createEvaluate(reviewDTO: IReviewDTO, touristLocationId: string, userId: string) {
        const { rating, date } = reviewDTO;

        if (!rating || !date) return { status: 400, message: "Missing required fields" };

        try {
            const newReview = await this.review.create({ 
                rating, 
                date,
                userId,
                touristLocationId,
            });

            return { status: 201, message: "Review created successfully", data: newReview };
        } catch (error) {
            console.log(error);
            return { status: 500, message: "Internal Server Error", error: (error as Error).message };
        }
    }

    async getEvaluates(touristLocationId: string) {
        try {
            const reviews = await this.review.findAll({
                where: { touristLocationId },
            });

            return { status: 200, message: "Reviews retrieved successfully", data: reviews };
        } catch (error) {
            console.log(error);
            return { status: 500, message: "Internal Server Error", error: (error as Error).message };
        }
    }

    async deleteEvaluate(userId: string, touristLocationId: string, date: Date) {
        try {
            const review = await this.review.findOne({
                where: {
                    date: new Date(date),
                    touristLocationID: touristLocationId,
                    userID: userId,
                },
            });

            if (!review) return { status: 404, message: "No reviews found for this user" };

            await review.destroy();

            return { status: 200, message: "Reviews deleted successfully" };
        } catch (error) {
            console.log(error);
            return { status: 500, message: "Internal Server Error", error: (error as Error).message };
        }
    }
}

export default Review;
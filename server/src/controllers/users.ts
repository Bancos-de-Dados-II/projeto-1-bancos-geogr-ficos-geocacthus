class User {
    constructor(userModel) {
        this.user = userModel;
    }

    async createUser(userDTO) {
        const { name, email, password } = await userDTO;

        if (!name || !email || !password) return { status: 400, message: "Missing required fields"};

        const existingUser = await this.user.findOne({ where: { email } });

        if (existingUser) return { status: 400, message: "User with this email already exists"};

        try {
            const newUser = await this.user.create({ 
                name, 
                email, 
                password,
            });

            return { status: 201, message: "User created successfully", data: newUser };
        } catch (error) {
            console.log(error);
            return { status: 500, message: "Internal Server Error", error: error.message };
        }
    }

    async getUser() {
        try {
            const users = await this.user.findAll({
                attributes: { exclude: ['password'] },
            });

            return { status: 200, message: "Users retrieved successfully", data: users };
        } catch (error) {
            console.log(error);
            return { status: 500, message: "Internal Server Error", error: error.message };
        }
    }

    async getUserById(userId) {
        try {
            const user = await this.user.findOne({
                where: { id: userId },
                attributes: { exclude: ['password'] },
            });

            if (!user) return { status: 404, message: "User not found", data: null }

            return { status: 200, message: "User retrieved successfully", data: user }
        } catch (error) {
            console.log(error);
            return { status: 500, message: "Internal Server Error", error: error.message };
        }
    }

    async getUserByEmail(userEmail) {
        try {
            const user = await this.user.findOne({
                where: { email: userEmail},
                attributes: { exclude: ['password'] },
            });

            if (!user) return { status: 404, message: "User not found", data: null };

            return { status: 200, message: "User retrieved successfully", data: user };
        } catch (error) {
            console.log(error);
            return { status: 500, message: "Internal Server Error", error: error.message };
        }
    }

    async updateUser(userAuth, updates) {
        try {
            const user = (await this.getUserByEmail(userAuth.email)).data;

            if (!user) return { status: 404, message: "User not found" };

            await user.update(updates);

            return { status: 200, message: "User updated successfully", data: user };
        } catch (error) {
            console.log(error);
            return { status: 500, message: "Internal Server Error", error: error.message };
        }
    }

    async updatehUserByEmail(userEmail, updates) {
        try {
            const user = (await this.getUserByEmail(userEmail)).data;

            if (!user) return { status: 404, message: "User not found" };

            await user.update(updates);

            return { status: 200, message: "User updated successfully", data: user };
        } catch (error) {
            console.log(error);
            return { status: 500, message: "Internal Server Error", error: error.message };
        }
    }

    async deleteUser(userAuth) {
        try {
            const user = (await this.getUserByEmail(userAuth.email)).data;

            if (!user) return { status: 404, message: "User not found" };

            await user.destroy();

            return { status: 200, message: "User deleted successfully" };
        } catch (error) {
            console.log(error);
            return { status: 500, message: "Internal Server Error", error: error.message };
        }
    }

    async deleteUserByEmail(userEmail) {
        try {
            const user = (await this.getUserByEmail(userEmail)).data;

            if (!user) return {status: 404, message: "User not found" };

            await user.destroy();

            return { status: 200, message: "User deleted successfully" };
        } catch (error) {
            console.log(error);
            return { status: 500, message: "Internal Server Error", error: error.message };
        }
    }
}   
import { Request, Response, Router } from "express";

const configureUsersRoutes = (router: Router) => {
    router.post('/api/users', (req: Request, res: Response) => { });

    router.get('/api/users', (req: Request, res: Response) => { res.status(200).json({ message: "user's enpont configure ok!" }); });

    router.get('/api/users/:id', (req: Request, res: Response) => { });

    router.put('/api/users/:id', (req: Request, res: Response) => { });

    router.delete('/api/users/:id', (req: Request, res: Response) => { });
};

export default configureUsersRoutes;
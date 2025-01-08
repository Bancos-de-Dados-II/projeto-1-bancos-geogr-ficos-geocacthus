import { Request, Response, Router } from "express";

const configureTouristLocationRoutes = (router: Router) => {
    router.post('/api/tourists-location', (req: Request, res: Response) => { });

    router.get('/api/tourists-location', (req: Request, res: Response) => { res.status(200).json({ message: "tourist location's enpont configure ok!" }); });

    router.get('/api/tourists-location/:id', (req: Request, res: Response) => { });

    router.put('/api/tourists-location/:id', (req: Request, res: Response) => { });

    router.delete('/api/tourists-location/:id', (req: Request, res: Response) => { });
}

export default configureTouristLocationRoutes;
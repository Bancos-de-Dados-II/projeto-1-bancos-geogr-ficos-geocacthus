import { Request, Response, Router } from "express"

const configureHoursRoutes = (router: Router) => {
    router.post('/api/hours', (req: Request, res: Response) => { });

    router.get('/api/hours', (req: Request, res: Response) => { res.status(200).json({ message: "hour's enpont configure ok!" }); });

    router.get('/api/hours/:id', (req: Request, res: Response) => { });

    router.put('/api/hours/:id', (req: Request, res: Response) => { });

    router.delete('/api/hours/:id', (req: Request, res: Response) => { });
}

export default configureHoursRoutes;
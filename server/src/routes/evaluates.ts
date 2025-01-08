import { Request, Response, Router } from "express"

const configureEvaluatesRoutes = (router: Router) => {
    router.post('/api/evaluates', (req: Request, res: Response) => { });

    router.get('/api/evaluates', (req: Request, res: Response) => { res.status(200).json({ message: "evaluate's enpont configure ok!" }); });

    router.get('/api/evaluates/:id', (req: Request, res: Response) => { });

    router.put('/api/evaluates/:id', (req: Request, res: Response) => { });

    router.delete('/api/evaluates/:id', (req: Request, res: Response) => { });
}

export default configureEvaluatesRoutes;
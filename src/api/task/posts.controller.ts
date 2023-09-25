import { RequestHandler, Router } from "express";

interface Dependencies {
  createTaskAction: RequestHandler;
}

export class PostsController {
  public readonly route = "/posts";

  constructor(private readonly dependencies: Dependencies) {}

  public getRouter(): Router {
    const router = Router();

    router.post(this.route, this.dependencies.createTaskAction);

    return router;
  }
}

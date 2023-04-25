import { Router } from "express";
import { userRouter } from "./userRouter.js";
import { sessionRouter } from "./sessionRouter.js";

export const apiRouter = Router()
apiRouter.use('/users', userRouter)
apiRouter.use('/sessions', sessionRouter )

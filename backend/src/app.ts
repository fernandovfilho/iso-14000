import cors from 'cors'
import express from 'express'

import router from './router'

class App {
    public express: express.Application

    public constructor() {
        this.express = express()
        this.middlewares()
        this.routes()
    }

    private middlewares(): void {
        this.express.use(express.json())
        this.express.use(cors())
        this.express.disable('x-powered-by')
    }

    private routes(): void {
        this.express.use(router)
    }
}

export default new App().express

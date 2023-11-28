import { publicProcedure, router } from "..";


export const appRouter = router({
    entity : publicProcedure.query( () => {
        return 'hello'
    })
})

export type AppRouter = typeof appRouter
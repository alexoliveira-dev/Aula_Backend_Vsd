import fastify from 'fastify'
const app = fastify()

import "dotenv/config"




app.get('/hello2', async (request, reply) => {
    

    return { msg: 'oiiiii' }
})
app.listen({ port: Number(process.env.PORT) }).then(() => {
    console.log('Rodando na porta ' + process.env.PORT)

})
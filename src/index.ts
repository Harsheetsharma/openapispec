import { z, createRoute, OpenAPIHono } from "@hono/zod-openapi"
import { Hono } from "hono";
import { SwaggerUI } from "@hono/swagger-ui";
import { DefaultService } from "../generated";

const service = await DefaultService.getUser("1");
const app = new OpenAPIHono();

const paramsSchema = z.object({
  id: z.string().min(1).max(10).openapi({
    param: {
      name: "id",
      in: "path" //this is just a path , where id is required , denoted as "in"
    },
    example: "123"
  })
})

const userSchema = z.object({
  name: z.string().min(4).max(20).openapi({
    example: "john"
  }),
  age: z.number().min(18).max(60).openapi({
    example: 20
  }),
  id: z.string().min(1).max(10).openapi({
    example: "123"
  })
})

// here we have created route 
const getUserRoute = createRoute({
  method: 'get',
  path: '/user/{id}',
  request: {
    params: paramsSchema
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: userSchema
        }
      },
      description: "get the users details"
    }
  }
})

const postUserRoute = createRoute({
  method: 'post',
  path: '/user/{id}',
  request: {
    params: paramsSchema
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: userSchema
        }
      },
      description: "get the users details"
    }
  }
})

app.openapi(getUserRoute, (c) => {
  const { id } = c.req.valid("param");
  return c.json({
    id,
    age: 20,
    name: 'ultra-man'
  })
})

app.openapi(postUserRoute, (c) => {
  const { id } = c.req.valid("param");
  return c.json({
    id,
    age: 20,
    name: 'ultra-man'
  })
})

app.doc('/doc', {
  openapi: '3.0.0',
  info: {
    version: "1.0.0",
    title: 'http://localhost:3000',
    description: 'This is a sample API documentation'
  }
})
export default app;

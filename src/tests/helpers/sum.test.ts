import { beforeAll, beforeEach, describe,expect,it } from "vitest";
import {app} from "../../index"
import request from "supertest"
import {resetdb} from '../helpers/reset-db'
describe("POST /sum",()=>{
    // If we want to run the any function that should run before each test case run then we have to call that function in the beforeEach block
    beforeEach(async()=>{
        console.log("Clearing db");
        await resetdb()
    })
 // If we want to run the any function that should run only once before calling all the test cases then we use the beforeAll block
    beforeAll(async()=>{
         console.log("Clearing db");
         await resetdb();
    })
    it("should sum add 2 numbers",async()=>{
        const res = await request(app).post('/sum').send({
            a:1,
            b:2
        })
        expect(res.status).toBe(200)
        expect(res.body).toEqual({answer:3,id:expect.any(Number)})
    })
})

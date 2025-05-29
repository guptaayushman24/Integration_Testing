import { PrismaClient } from  "../../../generated/prisma";
const prisma = new PrismaClient();

export async function resetdb(){
   await prisma.$transaction([
    prisma.request.deleteMany(),
   ])
}
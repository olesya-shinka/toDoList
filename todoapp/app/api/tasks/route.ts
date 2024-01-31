import prisma from "@/app/utils/connect";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PostTask(req: Request) {
    try {
        const { userId } = auth();
        if (!userId) {
            return NextResponse.json({ error: "Unauthorized", status: 401 });
        }
        const { title, description, date, completed, important } = await req.json();
        if (!title || !description || !date) {
            return NextResponse.json({
                error: "Ошибка",
                status: 400,
            });
        }
        if (title.length < 3) {
            return NextResponse.json({
                error: "Заголовок должен быть более 3 символов",
                status: 400,
            });
        }
        const task = await prisma.task.create({
            data: {
                title,
                description,
                date,
                isCompleted: completed,
                isImportant: important,
                userId,
            },
        });
        return NextResponse.json(task);
    } catch (error) {
        console.log("Ошибка создания задачи: ", error);
        return NextResponse.json({ error: "Ошибка создания задачи", status: 500 });
    }
}

export async function GetTask(req: Request) {
    try {
        const { userId } = auth();
        if (!userId) {
            return NextResponse.json({ error: "Unauthorized", status: 401 });
        }
        const tasks = await prisma.task.findMany({
            where: {
                userId,
            },
        });
        return NextResponse.json(tasks);
    } catch (error) {
        console.log("Ошибка при загрузке задач: ", error);
        return NextResponse.json({ error: "Ошибка при загрузке задач", status: 500 });
    }
}

export async function PutTask(req: Request) {
    try {
        const { userId } = auth();
        const { isCompleted, id } = await req.json();
        if (!userId) {
            return NextResponse.json({ error: "Unauthorized", status: 401 });
        }
        const task = await prisma.task.update({
            where: {
                id,
            },
            data: {
                isCompleted,
            },
        });
        return NextResponse.json(task);
    } catch (error) {
        console.log("Ошибка обновления задачи: ", error);
        return NextResponse.json({ error: "Ошибка обновления задачи", status: 500 });
    }
}

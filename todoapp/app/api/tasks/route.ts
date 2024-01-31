import prisma from "@/app/utils/connect";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PostTask(req: Request) {
    try {
        const { userId } = auth();
        if (!userId) {
            return NextResponse.json({ error: 'Вы не авторизованы', status: 401 })
        }
        const { title, description, date, completed, important } = await req.json();
        if (!title || !description || !date) {
            return NextResponse.json({ error: 'Ошибка получения данных', status: 400 })
        }
        if (title.length < 3) {
            return NextResponse.json({ error: 'Заголовок должен быть более 3 символов', status: 400 })
        }
        const task = await prisma.task.create({
            data: { title, description, date, isCompleted: completed, isImportant: important, userId }
        })
        return NextResponse.json(task)

    } catch (error) {
        console.log('error');
        return NextResponse.json({ error: 'error', status: 500 })
    }
}

export function GetTasks(req: Request) {
    try {

    } catch (error) {
        console.log('error');
        return NextResponse.json({ error: 'error', status: 500 })
    }
}

export function PutTask(req: Request) {
    try {

    } catch (error) {
        console.log('error');
        return NextResponse.json({ error: 'error', status: 500 })
    }
}

export function DeleteTask(req: Request) {
    try {

    } catch (error) {
        console.log('error');
        return NextResponse.json({ error: 'error', status: 500 })
    }
}
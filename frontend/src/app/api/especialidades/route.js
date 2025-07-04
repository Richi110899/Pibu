import { NextResponse } from 'next/server';
import { getAllEspecialidades, createEspecialidad } from '@/services/especialidad';

export async function GET() {
  const especialidades = await getAllEspecialidades();
  return NextResponse.json(especialidades);
}

export async function POST(request) {
  const data = await request.json();
  const created = await createEspecialidad(data);
  return NextResponse.json(created, { status: 201 });
} 
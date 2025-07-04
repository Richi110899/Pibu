import { NextResponse } from 'next/server';
import { getAllLaboratorios, createLaboratorio } from '@/services/laboratorio';

export async function GET() {
  const laboratorios = await getAllLaboratorios();
  return NextResponse.json(laboratorios);
}

export async function POST(request) {
  const data = await request.json();
  const created = await createLaboratorio(data);
  return NextResponse.json(created, { status: 201 });
} 
import { NextResponse } from 'next/server';
import { getAllMedicamentos, createMedicamento } from '@/services/medicamento';

export async function GET() {
  const medicamentos = await getAllMedicamentos();
  return NextResponse.json(medicamentos);
}

export async function POST(request) {
  const data = await request.json();
  const created = await createMedicamento(data);
  return NextResponse.json(created, { status: 201 });
} 
import { NextResponse } from 'next/server';
import { getLaboratorioById, updateLaboratorio, deleteLaboratorio } from '@/services/laboratorio';

export async function GET(request, { params }) {
  const lab = await getLaboratorioById(params.id);
  if (!lab) return NextResponse.json({ error: 'No encontrado' }, { status: 404 });
  return NextResponse.json(lab);
}

export async function PUT(request, { params }) {
  const data = await request.json();
  const updated = await updateLaboratorio(params.id, data);
  if (!updated) return NextResponse.json({ error: 'No encontrado' }, { status: 404 });
  return NextResponse.json(updated);
}

export async function DELETE(request, { params }) {
  const deleted = await deleteLaboratorio(params.id);
  if (!deleted) return NextResponse.json({ error: 'No encontrado' }, { status: 404 });
  return NextResponse.json({ message: 'Eliminado' });
} 
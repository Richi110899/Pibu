import { NextResponse } from 'next/server';
import { getMedicamentoById, updateMedicamento, deleteMedicamento } from '@/services/medicamento';

export async function GET(request, { params }) {
  const med = await getMedicamentoById(params.id);
  if (!med) return NextResponse.json({ error: 'No encontrado' }, { status: 404 });
  return NextResponse.json(med);
}

export async function PUT(request, { params }) {
  const data = await request.json();
  const updated = await updateMedicamento(params.id, data);
  if (!updated) return NextResponse.json({ error: 'No encontrado' }, { status: 404 });
  return NextResponse.json(updated);
}

export async function DELETE(request, { params }) {
  const deleted = await deleteMedicamento(params.id);
  if (!deleted) return NextResponse.json({ error: 'No encontrado' }, { status: 404 });
  return NextResponse.json({ message: 'Eliminado' });
} 
// Next Imports
import { NextResponse } from 'next/server'

// Data Imports
import { db } from '@/app/api/fake-db/apps/user-list'

export async function GET() {
  return NextResponse.json(db)
}

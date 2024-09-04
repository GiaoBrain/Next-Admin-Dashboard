// Next Imports
import { NextResponse } from 'next/server'

// Data Imports
import { db } from '@/app/api/fake-db/pages/user-profile'

export async function GET() {
  return NextResponse.json(db)
}

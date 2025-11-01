import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://cdyxfwbwmngiffobbucn.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkeXhmd2J3bW5naWZmb2JidWNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2NTIxNjYsImV4cCI6MjA3NzIyODE2Nn0.D_yZlYPlm7qwsgmL4U4VnLA56Rvixv0Vzu3IWsD4X40"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)




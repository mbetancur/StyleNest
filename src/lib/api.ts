import { createClient } from "./db/client"

// TODO: control errors properly in here
// Avoid select *
// Research for proper use of server db client
// Avoid creating client several times
export const getAllUserSuppliers = async () => {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('userSupplier')
    .select("*")
    .limit(2)
  if (error) {
    console.error('Error fetching data:', error)
    return { data: null, error }
  } else {
    console.log('Fetched data:', data)
    return { data, error: null }
  }
}

export const getSupplierById = async (id: string) => {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('userSupplier')
    .select("*")
    .eq('id', id)
  if (error) {
    console.error('Error fetching data:', error)
    return { data: null, error }
  } else {
    console.log('Fetched data:', data)
    return { data, error: null }
  }
}

export const searchUserSupplierByKeyword = async (keyword = "") => {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('userSupplier')
    .select("*")
    .textSearch('description', `${keyword.toLowerCase().trim()}`)
  if (error) {
    console.error('Error fetching data:', error)
    return { data: null, error }
  } else {
    console.log('Fetched data:', data)
    return { data, error: null }
  }
}
import { getSupplierById } from "@/lib/api"

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const { data: supplier } = await getSupplierById(slug)
  console.log(supplier)
  return <div>My Post: {slug}</div>
}
export class DataResource<T> {
  constructor(private endpoint: string) {}

  // # remove the return type to see the type
  async loadAll(): Promise<T[]> {
    const res = await fetch(this.endpoint)
    return res.json()
  }
  async loadOne(id: number) {}
  async delete(id: number) {}
  async save(data: T) {}
}

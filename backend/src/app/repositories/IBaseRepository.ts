export interface IBaseRepository<EntityType> {
  create(model: EntityType): Promise<EntityType>;
  update(_id: string, model: EntityType): Promise<void>;
  delete(_id: string): Promise<{ n: number }>;
  find(): Promise<EntityType[]>;
  findOne<T>(query: any): Promise<EntityType>;
  // count(query: any): Promise<number>;
}

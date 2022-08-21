export interface IRead<T> {
    findOne(id: string): Promise<T>;
    findAll(): Promise<T[]>;
}

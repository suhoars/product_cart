export interface ICategories {
  id: number;
  name: string;
};

export interface ICategoriesState {
  categories: {
    data: ICategories[]
  }
}

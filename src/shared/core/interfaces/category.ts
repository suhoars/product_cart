export interface ICategories {
  id: number;
  name: string;
  category: string;
};

export interface ICategoriesState {
  categories: {
    data: ICategories[]
  }
}

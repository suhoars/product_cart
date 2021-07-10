import { useEffect, useState } from 'react';
import { IProduct, IProductInCart } from '../../core/interfaces/index';
import { pageRenderer } from '../../core/HOCS/pageRenderer';
import { Product } from './Product';
import { getApi } from '../../helpers/api/api.service';

interface PropsInterface {
  data: IProductInCart[];
};

const ProductListContent = (props: PropsInterface) => {
  const { data } = props;
  return (
    <ul className="row grid-product today-list">
      {data.map((item, index) => {
        if (index < 4) {
          return (
            <li className="col col-3 col-sm-6 today-item" key={item.id}>
              <Product item={item} />
            </li>
          )
        }
      })}
    </ul>
  );
};

const ListProductContentPage = pageRenderer(ProductListContent);

const ProductList = () => {
  const [data, setData] = useState<IProduct[]>([]);
  useEffect(() => {
    getApi(['product'])
      .then((response) => {
        setData(response.data)
      })
  }, []);
  return (
      <ListProductContentPage data={data}/>
  );
};

export default ProductList;

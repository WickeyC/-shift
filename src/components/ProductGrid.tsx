import styled from 'styled-components';
import ProductCard from './ProductCard';
import { ProductType } from '../data';

const StyledProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media screen and (min-width: 980px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const ProductGrid: React.FC<{
  selectedBrandValue: string;
  products: ProductType;
  isShowingSearchResults: boolean;
}> = ({ selectedBrandValue, products, isShowingSearchResults }) => {
  if (selectedBrandValue === 'ALL_BRANDS') {
    return (
      <StyledProductGrid>
        {products.map((product) => (
          <ProductCard key={`ProductCard-${product.id}`} {...product} />
        ))}
      </StyledProductGrid>
    );
  } else {
    const filteredProducts = products.filter(
      (product) => product.brand === selectedBrandValue
    );
    if (filteredProducts.length !== 0) {
      return (
        <StyledProductGrid>
          {filteredProducts.map((product) => (
            <ProductCard key={`ProductCard-${product.id}`} {...product} />
          ))}
        </StyledProductGrid>
      );
    } else if (!isShowingSearchResults) {
      return (
        <div>
          There are currently no {selectedBrandValue} products in this
          category.
        </div>
      );
    } else {
      return <div></div>
    }
  }
};

export default ProductGrid;

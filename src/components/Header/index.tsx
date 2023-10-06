import { CartButton } from '../CartButton';
import { SearchBar } from '../SearchBar';
import { HeaderContainer, HeaderWrapper } from './styled';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <SearchBar />
        <CartButton />
      </HeaderWrapper>
    </HeaderContainer>
  );
}

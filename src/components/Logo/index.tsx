import * as C from './styles';
import Logo from '../../assets/logo-gallery.svg';

export const LogoGallery = () => {
  return (
    <C.Container>
      <img src={Logo} alt='Logotipo do App' />
    </C.Container>
  );
};
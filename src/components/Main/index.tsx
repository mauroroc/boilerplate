import * as S from './styles'

const Main = ({
  title = 'React Avancado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem da logomarca do react como exemplo"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration src="/img/hero-illustration.svg" />
  </S.Wrapper>
)

export default Main

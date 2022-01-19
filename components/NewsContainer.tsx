import { NewsContainer } from "../styles/styled-components/newsContainer.styles";
import { NewsContainerProps } from "../styles/styled-components/newsContainer.styles";

interface NewsSectionContainerProps extends NewsContainerProps {
  section: string;
}

const NewsSectionContainer = ({
  bgColor,
  section,
  width,
}: NewsSectionContainerProps) => {
  return (
    <>
      <NewsContainer bgColor={bgColor} width={width}>
        Hello
      </NewsContainer>
    </>
  );
};

export default NewsSectionContainer;

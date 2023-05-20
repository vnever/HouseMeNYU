import {Carousel} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'


const ProductCarouselComponent =() => {
  const cursorP = {
    cursor: "pointer"
  }
    return (
    <Carousel>
      <Carousel.Item>
        <img
          crossorigin="anonymous"
          className="d-block w-100"
          style={{height: "300px", objectFit: "cover"}}
          src="/images/carousel/carousel-1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/stay-details">
            <h3>New in Greenwich</h3>
          </LinkContainer>
          <p>4 month rental available</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height: "300px", objectFit: "cover"}}
          src="/images/carousel/carousel-2.png"
          alt="Second slide"
        />

        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/stay-details">
            <h3>New in Soho</h3>
          </LinkContainer>
          <p>8 month rental available</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height: "300px", objectFit: "cover"}}
          src="/images/carousel/carousel-3.png"
          alt="Third slide"
        />

        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/stay-details">
            <h3>New in Brooklyn</h3>
          </LinkContainer>
          <p>2 month sublet available</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProductCarouselComponent
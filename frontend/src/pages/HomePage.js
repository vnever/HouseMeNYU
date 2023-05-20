import ProductCarouselComponent from "../components/ProductCarouselComponent";
import NeighbourhoodCardComponent from "../components/NeighbourhoodCardComponent";
import {Row, Container} from 'react-bootstrap'
const HomePage = () => {
    const neighbourhoods = [
        "Soho",
        "Greenwich",
        "Brooklyn",
        "Queens",
    ];
    return (
        <>
        <ProductCarouselComponent/>
        <Container>
        <Row xs={1} md={2} className="g-4 mt-5">
        {
            neighbourhoods.map((neighbourhood, idx) => 
            <NeighbourhoodCardComponent key={idx} neighbourhood={neighbourhood} idx={idx}/>)
        }
        </Row>
        </Container>
        </>
    )
}

export default HomePage
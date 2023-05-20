import { Form } from "react-bootstrap";

const AttributesFilterComponent = () => {
  return (
    <>
      {[{ Bedrooms: ["1", "2", "3", "4", "5+"] }, { Bathrooms: ["1", "2","3", "4", "5+"] },
      { Amenities: ["indoor pool", "indoor gym","balcony", "city view"] }].map(
        (item, idx) => (
          <div key={idx} className="mb-3">
            <Form.Label>
              <b>{Object.keys(item)}</b>
            </Form.Label>
            {item[Object.keys(item)].map((i, idx) => (
              <Form.Check key={idx} type="checkbox" label={i} />
            ))}
          </div>
        )
      )}
    </>
  );
};

export default AttributesFilterComponent;

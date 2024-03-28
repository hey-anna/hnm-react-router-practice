import Button from "react-bootstrap/Button";

function SellBtn() {
  return (
    <div className="d-grid gap-2">
      {/* <Button variant="primary" size="lg">
        Block level button
      </Button> */}
      <Button variant="outline-danger" size="lg">
        구매하기
      </Button>
    </div>
  );
}

export default SellBtn;

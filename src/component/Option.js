import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Option({ options }) {
  return (
    <DropdownButton id="dropdown-basic-button" title="Size" variant="danger">
      {options.map((option, index) => (
        <Dropdown.Item key={index} href="#">
          {option}
        </Dropdown.Item>
      ))}
      {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
    </DropdownButton>
  );
}

export default Option;

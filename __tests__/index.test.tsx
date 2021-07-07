import { render, cleanup } from "@testing-library/react";
import App from "../pages/index";
import mockData from '../public/data.json';
import { shallow } from "enzyme";

const mockSuccesfulResponse = (
  status = 200,
  returnBody
) => {
  global.fetch = jest.fn().mockImplementationOnce(() => {
    return new Promise((resolve, reject) => {
      resolve({
        ok: true,
        status,
        json: () => {
          return returnBody ? returnBody : {};
        },
      });
    });
  });
};

afterEach(cleanup);

describe("App", () => {
  it("renders without crashing", async () => {
    const app = shallow(<App people={mockData.data} />);
    expect(app.find("h1").text()).toEqual("Rule of thumb.");
  });

  it("Renders list of famous people", async () => {
    const { asFragment, findByTestId } = render(<App people={mockData.data}/>);

    const listNode = await findByTestId('list');
    expect(listNode.children).toHaveLength(6);
    expect(asFragment()).toMatchSnapshot();
  })
});
import { render, screen, cleanup } from "@testing-library/react";
import App from "../pages/index";
import mockData from '../public/data.json';

const mockSuccesfulResponse = (
  status = 200,
  method = RequestType.GET,
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
    mockSuccesfulResponse(200, 'GET', []);
    render(<App />);
    expect(
      screen.getByRole("heading", { name: "Rule of thumb." })
    ).toBeInTheDocument();
  });

  it("Renders list of famous people", async () => {
    mockSuccesfulResponse(200, 'GET', mockData.data);
    const { asFragment, findByTestId } = render(<App />);

    const listNode = await findByTestId('list');
    expect(listNode.children).toHaveLength(6);
    expect(asFragment()).toMatchSnapshot();
  })
});
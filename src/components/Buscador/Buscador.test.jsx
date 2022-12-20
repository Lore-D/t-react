import { render } from "@testing-library/react";
import Buscador from "./Buscador";

describe('<onBuscador />', () => {
    test('Should render component', () => {
        const onBuscar = jest.fn();
        const component = render(<Buscador onBuscar={onBuscar} />)
        expect(component.container).toBeInTheDocument(true);
    })
});
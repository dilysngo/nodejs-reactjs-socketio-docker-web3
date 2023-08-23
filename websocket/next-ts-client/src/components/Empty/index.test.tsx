import { render, screen } from "@testing-library/react"
import Empty from "./index";

describe('Empty Component', () => {
    it('Empty component default render correct', () => {
        render(<Empty />);
        const myElement = screen.getByText(/Empty Data/);
        expect(myElement).toBeInTheDocument()
    })

    it('Empty component data render correct', () => {
        render(<Empty>Empty</Empty>);
        const myElement = screen.getByText(/Empty/);
        expect(myElement).toBeInTheDocument()
    })
})
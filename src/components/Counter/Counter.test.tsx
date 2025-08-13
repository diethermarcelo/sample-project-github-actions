import { render, screen, fireEvent } from "@testing-library/react"
import Counter from "./Counter"
import "@testing-library/jest-dom";

describe("Counter Component", () => {
    it("should initialize count as 3", () => {
        render(<Counter initialCount={3}/>)
        expect(screen.getByText(/count is/i)).toBeInTheDocument();
    })

    it("should increment by 1 if clicked", () => {
        render(<Counter />)
        fireEvent.click(screen.getByText(/count is/i))
        expect(screen.getByText(/count is/i)).toHaveTextContent("1");
    })
})
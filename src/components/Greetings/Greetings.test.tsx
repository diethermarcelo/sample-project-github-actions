import React from "react";
import { render, screen } from "@testing-library/react";
import Greetings from "./Greetings";
import "@testing-library/jest-dom";

describe("Greetings Component", () => {
    test("renders the correct greeting message", () => {
        render(<Greetings name="Diether" />)
        expect(screen.getByText("Hi, Diether!")).toBeInTheDocument();
    })
})
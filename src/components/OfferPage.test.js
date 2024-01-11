import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import OfferPage from "./OfferPage"; // Ange den korrekta sökvägen till din komponent

// Ett enkelt testfall för att kontrollera att komponenten renderar korrekt
test("renderar OfferPage-komponenten korrekt", () => {
  render(<OfferPage />);

  // Hitta komponentens text eller element och verifiera att de visas korrekt
  expect(screen.getByText("Begär offert")).toBeInTheDocument();
  expect(screen.getByLabelText("Namn:")).toBeInTheDocument();
  // ... Fortsätt att verifiera andra delar av din komponent här
});

// Ett testfall för att testa formuläret och dess inmatningsfält
test("skickar formuläret när användaren klickar på Skicka-knappen", async () => {
  render(<OfferPage />);

  // Fyll i formuläret med testdata
  fireEvent.change(screen.getByLabelText("Namn:"), {
    target: { value: "Testanvändare" },
  });
  fireEvent.change(screen.getByLabelText("Email:"), {
    target: { value: "test@example.com" },
  });
  // ... Fortsätt att fylla i andra fält här

  // Klicka på Skicka-knappen
  fireEvent.click(screen.getByText("Skicka förfrågan"));

  // Vänta på att en framgångsrik respons eller felmeddelande ska visas (beroende på din kod)
  await waitFor(() => {
    expect(screen.getByText("SUCCESS!")).toBeInTheDocument(); // Anpassa detta baserat på ditt kodflöde
  });
});

// Du kan fortsätta att skriva fler testfall efter behov

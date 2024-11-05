import { HateoasLink } from "./index.js";

test("`HateoasLink` can be created", () => {
  const link = new HateoasLink("http://localhost", "Local");
  expect(link).toBeDefined();
  expect(link.href).toBe("http://localhost");
  expect(link.label).toBe("Local");
});

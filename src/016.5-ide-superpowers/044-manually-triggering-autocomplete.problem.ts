type MyObj = {
  foo: string;
  bar: number;
  baz: boolean;
};

const acceptsObj = (obj: MyObj) => {};

acceptsObj({
  // Autocomplete in here!
  foo: "hi",
  bar: 1,
  baz: true,
});

document.addEventListener(
  // Autocomplete this string!
  "click",
  (event) => {
    console.log(event);
  },
);

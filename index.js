// handle form submission
// needs to:
// use ajax to post to: https://formsws-hilstaging-com-0adj9wt8gzyq.runscope.net/solar
// if field(s) not valid, indicate by change field border
(function () {
  // phone mask
  // handle input change for phone
  const tel = document.querySelector("#tel");
  // console.log(tel);
  tel.addEventListener("input", function (e) {
    console.log(e.target.value);
    handlePhoneInput(e.target.value);
  });

  function handlePhoneInput(value) {
    // value can contain special characters from previous applyPhoneMask() invocations, so filter those out
    const mask = applyPhoneMask(value.replace(/\D/g, ""));
    tel.value = mask;
  }

  function applyPhoneMask(value) {
    console.log(value);
    let result = "";
    for (let i = 0; i < Math.min(value.length, 10); i++) {
      if (i === 0) result += "(";
      if (i === 3) result += ") ";
      if (i === 6) result += "-";
      result += value[i];
    }
    return result;
  }

  const form = document.querySelector("form");
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const ERROR_CLASS = "form--error";

  // give red border to invalid inputs
  [name, tel, email].forEach(function (_input) {
    _input.addEventListener("input", function (e) {
      const target = e.target;
      const isValid = target.validity.valid;
      if (isValid) target.classList.remove(ERROR_CLASS);
      if (!isValid) target.classList.add(ERROR_CLASS);
    });
  });
})();

// handle form submission
// needs to:
// use ajax to post to: https://formsws-hilstaging-com-0adj9wt8gzyq.runscope.net/solar
// if field(s) not valid, indicate by change field border
(function () {
  //event listeners********************

  //phone mask------------------
  //handle input change for phone
  const tel = document.querySelector("#tel");
  tel.addEventListener("input", function (e) {
    handlePhoneInput(e.target.value);
  });

  //error styling-----------------
  //change border color of invalid fields
  //
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const ERROR_CLASS = "form--error";

  //give red border to invalid inputs
  //invalid inputs show custom error messages
  [name, tel, email].forEach(function (_input) {
    _input.addEventListener("input", function (e) {
      const target = e.target;
      const invalid = target.validity.patternMismatch;
      if (invalid) {
        target.classList.add(ERROR_CLASS);
        target.setCustomValidity(target.title);
      }
      if (!invalid) {
        target.classList.remove(ERROR_CLASS);
        target.setCustomValidity("");
      }
    });
  });

  //submit form-----------------
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // since ignoring errors, do not wait for promise to resolve
    fetch(form.action, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(getFormData()),
    });

    //simulate waiting for server response by delaying button update
    setTimeout(updateButton, 700);
  });

  //helper methods**********************

  //phone mask-------
  function handlePhoneInput(value) {
    // value can contain special characters from previous applyPhoneMask() invocations, so filter those out
    const mask = applyPhoneMask(value.replace(/\D/g, ""));
    tel.value = mask;
  }

  function applyPhoneMask(value) {
    let result = "";
    for (let i = 0; i < Math.min(value.length, 10); i++) {
      if (i === 0) result += "(";
      if (i === 3) result += ") ";
      if (i === 6) result += "-";
      result += value[i];
    }
    return result;
  }

  //form ajax submit-------

  function getFormData() {
    const inputSelectors = {
      name: "#name",
      city: "#city",
      state: "#state",
      tel: "#tel",
      email: "#email",
    };

    const data = {};

    Object.entries(inputSelectors).forEach(function (entry) {
      const key = entry[0];
      const sel = entry[1];
      const el = document.querySelector(sel);
      data[key] = el.value;
    });

    return data;
  }

  function updateButton() {
    const submit = document.querySelector("button[type='submit']");
    submit.textContent = "Submitted";
    submit.disabled = true;
  }
})();

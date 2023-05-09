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
})();

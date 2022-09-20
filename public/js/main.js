function $(selector, node) {
  return node == "all"
    ? document.querySelectorAll(selector)
    : document.querySelector(selector);
}

if (location.pathname == "/update") {
  $("#update_user").addEventListener("submit", (e) => {
    e.preventDefault();

    let initial_state = {};

    let inputs = $("input", "all");

    for (let i = 0; i < inputs.length; i++) {
      initial_state[inputs[i].name] = inputs[i].value;
    }

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(initial_state),
    };
    fetch(`http://localhost:3000/api/users/${initial_state.id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          alert("successfull");
        }
      });
  });
}

if (location.pathname == "/") {
  let deleteButton = $("[data-id]");

  const requestOptions = {
    method: "DELETE",
  };

  deleteButton.addEventListener("click", () => {
    fetch(
      `http://localhost:3000/api/users/${deleteButton.getAttribute("data-id")}`,
      requestOptions
    ).then((res) => location.reload());
  });
}

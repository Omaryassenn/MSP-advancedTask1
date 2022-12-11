const storageUsers = JSON.parse(localStorage.getItem("users") || "[]");
const initialLength = 10;

const users = [...storageUsers];

const refreshTable = () => {
  const concatLength = initialLength - users.length;

  document.querySelector(".table tbody").innerHTML = users
    .concat(new Array(concatLength > 0 ? concatLength : 0).fill({}))
    .map(
      user => `<tr>
      <td>${user.name || ""}</td>
    <td>${user.email || ""}</td>
    <td>${user.password || ""}</td>
    <td>${user.gender || ""}</td>
    </tr>`
    )
    .join("\n");
};

const validateInput = () => {
  if (password.value.length < 3) {
    alert("Password too short");
    return false;
  } else if (password.value !== confirmpass.value) {
    alert("Password doesn't match");
    return false;
  }

  return true;
};

document.querySelector("#form").addEventListener("submit", e => {
  e.preventDefault();

  if (!validateInput()) return;

  const data = {
    name: `${firstname.value} ${lastname.value}`,
    email: email.value,
    password: password.value,
    gender: male.checked ? "Male" : "Female",
  };

  users.push(data);
  refreshTable();
  localStorage.setItem("users", JSON.stringify(users));
});

refreshTable();

function showSalary(users, age) {
  const usersWeNeed = users.filter((user) => user.age <= age);
  const namesAndSal = usersWeNeed
    .map((user) => user.name + ", " + user.balance)
    .join("\n");

  return namesAndSal;
}

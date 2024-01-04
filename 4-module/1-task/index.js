function makeFriendsList(friends) {
  let friendsNames = friends.map(
    (friend) => friend.firstName + " " + friend.lastName
  );

  let friendsList = document.createElement("UL");

  for (let friend of friendsNames) {
    let oneFriendName = document.createElement("LI");
    oneFriendName.textContent = friend;
    friendsList.append(oneFriendName);
  }

  return friendsList;
}

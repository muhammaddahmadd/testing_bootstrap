function User({ email }) {
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const extractedName = email.split("@")[0];
  const modifiedName = capitalizeFirstLetter(extractedName);

  return (
    <div>
      <p>{modifiedName}</p>
    </div>
  );
}

export default User;

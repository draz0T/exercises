const Card = ({ user }) => {
  return (
    <div key={user.id} className="card">
      <img
        src={`https://robohash.org/${user.email}`}
        style={{ width: "100%" }}
        alt="profile picture"
      />
      <div className="user-info">
        <h3>{user.name}</h3>
        <h5>{user.email}</h5>
      </div>
    </div>
  );
};

export default Card;

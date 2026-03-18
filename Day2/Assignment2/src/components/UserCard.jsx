
function UserCard({user}){

    const {names,bio,role="Member"}=user;
    return (
        <div className="card-box">
            <h2>{names}</h2>
            <p>{bio}</p>
            <p>{role}</p>
        </div>
    );
}
export default UserCard;
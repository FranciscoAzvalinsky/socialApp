import style from './ProfileButton.module.css';

export default function ProfileButton() {

    let user = JSON.parse(localStorage.getItem('user'));

    console.log(user)
    console.log(user.profileName);
    console.log(user.username);
    console.log(user.firstName);
    console.log(user.lastName);
    console.log(user.phoneNumber);
    console.log(user.email);
    console.log(user.profilePicture);

    return (
        <div className={style.btnContainer}>
            <div className={style.profileButton}>
                <p className={style.profileName}>{user.profileName}</p>
                <p className={style.username}>@{user.username}</p>
                <img className={style.image} src={user.profilePicture} alt='f'></img>
            </div>
        </div>
    )
}
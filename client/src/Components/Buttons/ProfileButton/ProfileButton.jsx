import style from './ProfileButton.module.css';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function ProfileButton() {
    const [isLoading, setIsLoading] = useState(true);

    let user = useSelector((state) => state.user);

    useEffect(() => {
        if (!user && isLoading) {
            const timeoutId = setTimeout(function() {
                window.location.reload();
            }, 500);

            return () => clearTimeout(timeoutId);
        } else {
            setIsLoading(false);
        }
    }, [user, isLoading]);

    return (
        <div className={style.btnContainer}>
            {user && <div className={style.profileButton}>
                <p className={style.profileName}>{user.profileName}</p>
                <p className={style.username}>@{user.username}</p>
                <img className={style.image} src={user.profilePicture} alt='f'></img>
            </div>}
        </div>
    )
}
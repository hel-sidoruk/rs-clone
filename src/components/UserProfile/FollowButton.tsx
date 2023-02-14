import React, { useEffect, useState } from 'react';
import { FollowersAPI } from '../../api/FollowersAPI';
import { UserInterface } from '../../types/user';

export const FollowButton = ({ user }: { user: UserInterface }) => {
  const [followedUser, setFollowedUser] = useState<string | false>(false);

  const handleClick = async () => {
    if (!followedUser) {
      const { username, honor, rank, clan } = user;
      const followUser = { followUser: username, honor, clan, rank };
      const { follower } = await FollowersAPI.create(followUser);
      if (follower) setFollowedUser(follower.id);
    } else {
      if (followedUser) {
        const { status } = await FollowersAPI.delete(followedUser);
        if (status) setFollowedUser(false);
      }
    }
  };

  useEffect(() => {
    FollowersAPI.checkIsFollowed(user.username).then(({ isFollowed }) =>
      setFollowedUser(isFollowed || false)
    );
  }, [user]);

  return (
    <button
      className={`user-info__follow btn ${followedUser ? 'unfollow' : 'follow'}`}
      onClick={handleClick}
    >
      <i className="icon-moon-follow icon-moon"></i>
      {followedUser ? 'Unfollow' : 'Follow'}
    </button>
  );
};

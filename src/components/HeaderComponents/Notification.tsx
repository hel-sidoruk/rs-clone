import React from 'react';

export const Notification = () => {
  return (
    <li className="notification">
      <figure>
        <div className="small-hex is-extra-wide is-blue-rank">
          <div className="inner-small-hex is-extra-wide ">
            <span>3 kyu</span>
          </div>
        </div>
      </figure>
      <figcaption>
        <a
          data-notification-ids="63e014c10bab1d0534b6cb5d"
          data-turbolinks="false"
          href="/users/63256c43dfffbe00584b658c"
        >
          Respect. You have ranked up to 3 kyu in JavaScript.
        </a>
        <div className="ml-15px"></div>
      </figcaption>
      <div className="clearfix"></div>
    </li>
  );
};

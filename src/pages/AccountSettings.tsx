import React from 'react';
import { DeleteAccountButton } from '../components/AccountSettings/DeleteAccountButton';
import { InformationForm } from '../components/AccountSettings/InformationForm';

export const AccountSettings = () => {
  return (
    <main className="play-view">
      <h1 className="page-title">Account Settings</h1>
      <div className="account-settings">
        <div className="section account-settings__section">
          <InformationForm />
        </div>
        <div className="section account-settings__section">
          <form>
            <h3 className="title">PASSWORD</h3>
          </form>
        </div>
        <div className="section account-settings__section">
          <h3 className="title">Delete Account</h3>
          <p className="text">
            If you wish you can delete your account. Your authored kata, solutions and comments will
            remain but will instead be attached to a generic profile that is not associated with any
            of your personal information. After deleting your account you are free to sign up again
            using the same email address.
          </p>
          <DeleteAccountButton />
        </div>
      </div>
    </main>
  );
};

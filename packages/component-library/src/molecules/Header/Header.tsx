import "./header.css";

import { Button } from "../../atoms/Button/Button";
import React from "react";

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
  logo?: string;
  text: string;
}

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
  logo,
  text,
}: HeaderProps) => {
  return (
    <header>
      <div className="wrapper">
        <div>
          {logo && <img src={logo} alt="" />}
          <h1>{text}</h1>
        </div>
        <div>
          {user ? (
            <>
              <span className="welcome">
                Welcome, <b>{user.name}</b>!
              </span>
              <Button size="small" onClick={onLogout} label="Log out" />
            </>
          ) : (
            <>
              <Button size="small" onClick={onLogin} label="Log in" />
              <Button
                primary
                size="small"
                onClick={onCreateAccount}
                label="Sign up"
              />
            </>
          )}
        </div>
      </div>
    </header>
  );
};

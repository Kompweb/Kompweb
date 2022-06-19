import React from 'react';
// import { useHistory } from 'react-router-dom';
import { Button, Dropdown, Menu } from 'antd';

// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'antd/dist/antd.min.css';

const ChildMenu = props => {
  //   const { push } = useHistory();
  //   const { logout } = useAuth0();

  //   const dashboard = () => {
  //     push('/dashboard');
  //   };

  return (
    <Menu {...props} mode="inline" className="header-menu">
      <Menu.Item
        key="1"
        className="header-menu-item"
        // onClick={dashboard}
        // icon={<HomeOutlined className="child-header-menu-item" />}
      >
        Home
      </Menu.Item>

      <Menu.Item
        key="4"
        className="header-menu-item"
        disabled={true}
        // icon={<QuestionCircleOutlined className="child-header-menu-item" />}
      >
        Help
      </Menu.Item>
      <Menu.Item
        key="5"
        // icon={<LogoutOutlined className="child-header-menu-item" />}
        className="header-menu-item"
        // onClick={() => logout({ returnTo: window.location.origin })}
      >
        Log Out
      </Menu.Item>
    </Menu>
  );
};

const Header = ({
  displayMenu = true,
  //   backButton = false,
  //   pointsRemaining = false,
  //   teamName = false,
  //   versus = false,
  //   pointsToWin = false,
  ...props
}) => {
  return (
    <div className="hero">
      {/* {backButton && <BackButton destination={'/child/mission-control'} />} */}
      {/* {countDown && <CountDown className="countdown" />} */}
      {displayMenu && (
        <Dropdown
          overlay={<ChildMenu />}
          trigger={['click']}
          className="menu-button"
        >
          <Button
            className="menu child-header-button"
            // icon={<MenuOutlined className="child-header-hamburger" />}
            type="default"
          />
        </Dropdown>
      )}
      {/* {pointsRemaining && (
        <h2 className="points-remaining">POINTS REMAINING: {props.points}</h2>
      )} */}
      <h1 className="header-text">{props.title || 'KOMPWEB'}</h1>
      {/* {teamName && <h2 className="team-name">{props.team.teamName}</h2>} */}
      {/* {versus && (
        <h2 className="versus">
          {props.team.teamName} VS {}
        </h2>
      )} */}
      {/* {pointsToWin && (
        <h3 className="points-to-win">201 POINTS NEEDED TO WIN!</h3>
      )} */}
    </div>
  );
};
export default Header;
Header.propTypes = {
  title: PropTypes.string,
};

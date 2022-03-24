import React from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import { FaRegUserCircle } from 'react-icons/fa';
import Modal from 'react-modal';
import logo from '../../assets/images/logo.png';
import './Navbar.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');
const Navbar = ({ cartItem, guns }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="nav">
      <div className="nav__container">
        <div className="logo">
          <img src={logo} alt="" srcset="" />
          <h1>GunLoading</h1>
        </div>
        <ul className="nav__link">
          <li>Home</li>
          <li>Guns</li>
          <li onClick={openModal} className="cart">
            <BsFillCartFill />
            <div className="item__num">{cartItem}</div>
          </li>
          <li>
            <FaRegUserCircle />
          </li>
        </ul>
      </div>

      {/* modal */}
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {guns.map((gun) => (
          <h3>{gun.name}</h3>
        ))}
      </Modal>
    </div>
  );
};

export default Navbar;

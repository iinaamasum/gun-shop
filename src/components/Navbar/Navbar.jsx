import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import { FaRegUserCircle } from 'react-icons/fa';
import Modal from 'react-modal';
import logo from '../../assets/images/logo.png';
import Modalcart from '../Modalcart/Modalcart';
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
        className="modal"
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <AiOutlineCloseCircle className="close__modal" onClick={closeModal} />
        <h1 style={{ 'text-align': 'center' }}>Added to Cart</h1>
        {guns.map((gun) => (
          <Modalcart gun={gun} />
        ))}
      </Modal>
    </div>
  );
};

export default Navbar;

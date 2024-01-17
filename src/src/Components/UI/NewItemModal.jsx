import { useState } from "react";
import Modal from "./Modal";
import Button from "../Common/Button";

const NewItemModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleNewProduct = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="flex justify-center">
      <Button
        handleClick={handleNewProduct}
        classes={
          "fixed  bottom-0 w-64 md:w-80 h-12 background bg-custom-orange mb-12 font-bold "
        }
      >
        New item
      </Button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default NewItemModal;

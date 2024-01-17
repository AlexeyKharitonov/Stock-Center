import { Fragment, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addOrder } from "..//../Redux/Orders/OrdersSlice";
import { nanoid } from "nanoid";
import { Dialog, Transition } from "@headlessui/react";
import { RiCloseFill } from "react-icons/ri";
import Button from "../Common/Button";

const Modal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    dispatch(addOrder({ ...data, id: nanoid() }));
    reset();
    onClose();
  };

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setTimeout(() => {
          onClose();
        }, 200);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, onClose]);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={onClose}
          open={isOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-black bg-opacity-60"
              // onClick={onCloseDebug}
              // onClick={onClose}
            />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Panel className="fixed w-full inset-0 flex items-center justify-center p-4 overflow-auto">
              <div
                className="bg-white rounded-md w-[400px] md:w-[500px] mx-auto"
                ref={modalRef}
              >
                <Dialog.Title
                  as="h2"
                  className="text-2xl font-extrabold border-b-2 leading-6 text-gray-900"
                >
                  <div className="flex justify-between px-8 py-6 w-full">
                    <span className="text-[custom-black]">New Item</span>
                    <button onClick={onClose}>
                      <RiCloseFill
                        size={32}
                        className="transition-all text-custom-gray"
                      />
                    </button>
                  </div>
                </Dialog.Title>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6 mx-auto px-8 py-6 w-[375px] md:w-[480px]"
                >
                  <div>
                    <label
                      htmlFor="title"
                      className="block px-0.5 mb-2.5 text-sm font-semibold text-custom-black"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      {...register("title", {
                        required: "Title is required",
                        minLength: {
                          value: 2,
                          message: "Title must contain at least 2 characters",
                        },
                      })}
                      className={`mt-1 px-3 py-2 ${
                        errors.title ? "border-custom-orange" : ""
                      } text-custom-gray outline-none block w-full border-2 rounded-md shadow-sm`}
                      placeholder="Title"
                    />
                    {errors.title && (
                      <span className="text-sm font-medium text-custom-orange">
                        {errors.title.type === "required"
                          ? "Title is required"
                          : "Title must contain at least 2 characters"}
                      </span>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="price"
                      className="block px-0.5 mb-2.5 text-sm font-semibold text-custom-black"
                    >
                      Price
                    </label>
                    <input
                      type="text"
                      name="price"
                      id="price"
                      maxLength={13}
                      {...register("price", {
                        required: "Price is required",
                        pattern: {
                          value: /^[0-9]+(\.[0-9]+)?$/,
                          message: "Invalid price format",
                        },
                      })}
                      className={`mt-1 px-3 py-2 text-custom-gray outline-none block w-full ${
                        errors.price ? "border-custom-orange" : ""
                      } border-2 rounded-md shadow-sm`}
                      placeholder="0.00"
                    />
                    {errors.price && (
                      <span className="text-sm font-medium text-custom-orange">
                        {errors.price.type === "required"
                          ? "Price is required"
                          : "Invalid price format"}
                      </span>
                    )}
                  </div>
                  <div className="pb-7">
                    <label
                      htmlFor="dateTime"
                      className="block px-0.5 mb-2.5 text-sm font-semibold text-custom-black"
                    >
                      Date and Time
                    </label>
                    <input
                      type="text"
                      name="dateTime"
                      id="dateTime"
                      {...register("dateTime", {
                        required: "dateTime",
                        pattern: {
                          value: /^\d{2}\.\d{2}\.\d{4} \d{2}:\d{2}:\d{2}$/,
                          message: "Invalid date time",
                        },
                      })}
                      className={`mt-1 px-3 py-2 outline-none text-custom-gray block w-full ${
                        errors.dateTime ? "border-custom-orange" : ""
                      }  border-2 rounded-md shadow-sm`}
                      placeholder="01.01.2000 00:00:00"
                    />
                    {errors.dateTime && (
                      <span className="text-sm font-medium text-custom-orange">
                        {errors.dateTime.type === "required"
                          ? "date and time is required"
                          : "Invalid date and time"}
                      </span>
                    )}
                  </div>
                  <div className="flex justify-end pt-8 border-t-2 px-6 py-0">
                    <Button
                      handleClick={onClose}
                      classes={
                        "bg-[#6C757D] rounded-md mr-2 hover:bg-[#586169]"
                      }
                    >
                      Close
                    </Button>
                    <Button classes={"bg-custom-orange rounded-md"}>Add</Button>
                  </div>
                </form>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;

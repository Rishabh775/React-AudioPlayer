import { CgClose } from "react-icons/cg";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import warning from "../assets/images/error-indicate.webp";
import { Link } from "react-router-dom";

type ReminderModalProps = {
  isOpen: boolean;
  close: () => void;
};

const ReminderModal: React.FC<ReminderModalProps> = ({ isOpen, close }) => {
  return (
    <>
      {isOpen && (
        <div className="absolute inset-0 z-10 bg-black/20 backdrop-blur-[1px]"></div>
      )}
      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={close}
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-500"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md rounded-xl bg-gradient-to-b from-purple-900/30 to-black/90 p-6 backdrop-blur-[5px] border border-purple-200/40 shadow-md shadow-black">
                  <DialogTitle
                    as="h3"
                    className="text-base/7 font-medium text-white flex items-center flex-wrap justify-center"
                  >
                    <img
                      loading="lazy"
                      src={warning}
                      className="w-32 h-20"
                      alt="warning"
                    />
                    <h2 className="-translate-x-5">
                      Please Login to get full access!!
                    </h2>
                  </DialogTitle>
                  <div
                    className="absolute top-3 right-3 cursor-pointer"
                    onClick={close}
                  >
                    <CgClose className="fill-white hover:text-white/50 text-2xl" />
                  </div>
                  <p className="mt-2 text-sm/6 text-white/50 text-center">
                    You need to login to get full access to the app. <br />{" "}
                    Please login to continue.
                  </p>
                  <div className="mt-4 flex justify-center">
                    <Link
                      to="/login"
                      className="inline-flex items-center gap-2 rounded-md bg-purple-700/40 py-1.5 px-10 text-sm/6 font-semibold text-white shadow-white/10 focus:outline-none hover:bg-purple-600/40 hover:shadow-black data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                      onClick={close}
                    >
                      Login
                    </Link>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ReminderModal;

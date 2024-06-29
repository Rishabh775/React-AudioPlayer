import { CgClose } from "react-icons/cg";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";

type ReminderModalProps = {
  isOpen: boolean;
  close: () => void;
  src?: string;
  iconStyle?: string;
  title?: string;
  children?: any;
};

const Modal: React.FC<ReminderModalProps> = ({
  isOpen,
  close,
  src,
  iconStyle,
  title,
  children,
}) => {
  return (
    <>
      {isOpen && (
        <div className="absolute inset-0 z-10 bg-zinc-950/50 backdrop-blur-[1px]"></div>
      )}
      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-20 focus:outline-none"
          onClose={close}
        >
          <div className="fixed inset-0 z-20 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-lg rounded-xl bg-zinc-900/60 p-6 backdrop-blur-[5px] border border-purple-400/20 shadow shadow-black">
                  <DialogTitle
                    as="h3"
                    className="text-base/7 font-medium text-white flex items-center flex-wrap justify-center"
                  >
                    <img
                      loading="lazy"
                      src={src}
                      className={iconStyle}
                      alt="warning"
                    />
                    {title}
                  </DialogTitle>
                  <div
                    className="absolute top-3 right-3 cursor-pointer"
                    onClick={close}
                  >
                    <CgClose className="fill-white hover:text-white/50 text-2xl" />
                  </div>
                  {children}
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;

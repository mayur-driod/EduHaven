import { motion, AnimatePresence } from "framer-motion";

const ConfirmLogoutModal = ({ onConfirm, onCancel }) => {
  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        className="fixed inset-0 z-50 backdrop-blur-sm bg-black/40 flex items-center justify-center transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="bg-sec backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl max-w-sm w-full text-center"
        >
          <h2 className="text-xl text-[var(--txt)] font-semibold mb-2">
            Confirm Logout
          </h2>
          <p className="mb-6 text-[var(--txt-dim)] dark:text-gray-300">
            Are you sure you want to logout?
          </p>
          <div className="flex justify-evenly gap-4">
            <button
              onClick={onConfirm}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition duration-200 w-32"
            >
              Yes, Logout
            </button>
            <button
              onClick={onCancel}
              className="bg-ter text-[var(--txt)] px-4 py-2 rounded-lg hover:bg-primary font-medium transition duration-200 w-32"
            >
              Cancel
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ConfirmLogoutModal;

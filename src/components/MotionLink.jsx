import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function MotionLink({ toId, children }) {
    const navigate = useNavigate();

    const handleClick = () => {
    navigate("/", { state: { scrollTo: toId } });
    };

    return (
        <motion.a
            onClick={handleClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-target"
        >
            {children}
        </motion.a>
    );
}

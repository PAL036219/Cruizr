import { t as motion } from "../_libs/framer-motion.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Reveal-BHPg_427.js
var import_jsx_runtime = require_jsx_runtime();
function Reveal({ children, delay = 0, className = "", direction = "up" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: {
			opacity: 0,
			...{
				up: {
					y: 24,
					x: 0
				},
				down: {
					y: -24,
					x: 0
				},
				left: {
					x: 24,
					y: 0
				},
				right: {
					x: -24,
					y: 0
				},
				none: {
					x: 0,
					y: 0
				}
			}[direction]
		},
		whileInView: {
			opacity: 1,
			x: 0,
			y: 0
		},
		viewport: {
			once: true,
			margin: "0px 0px -60px 0px",
			amount: .12
		},
		transition: {
			duration: .7,
			ease: "easeOut",
			delay: delay / 1e3
		},
		children
	});
}
//#endregion
export { Reveal as t };

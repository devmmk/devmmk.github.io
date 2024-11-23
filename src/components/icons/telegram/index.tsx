import { SvgProps } from "../types";

const TelegramIcon = (props: SvgProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-16.91 6.977c-1.182.488-1.469 1.728-.644 2.31l4.222 2.96 9.88-9.88c.234-.234.61-.234.844 0 .234.235.234.61 0 .844l-9.88 9.88 2.96 4.222c.582.825 1.822.538 2.31-.644l6.977-16.91c.384-.93-.192-1.974-1.222-1.974z" />
    </svg>
);

export default TelegramIcon;

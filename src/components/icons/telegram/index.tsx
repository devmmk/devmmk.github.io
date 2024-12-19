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
        <path d="M22.1 3.1s0-.1 0 0l-3.7 19.8c-.3 1.3-1 1.6-2.1 1l-5.8-4.3-2.8 2.7c-.3.3-.6.6-1.2.6l.4-6.1L18.4 6.2c.4-.4-.1-.6-.6-.2L6.6 15.3l-5.9-1.8c-1.3-.4-1.3-1.3.3-1.9L20.8 2.3c1.1-.4 2 .3 1.3.8z" />
    </svg>
);
export default TelegramIcon;

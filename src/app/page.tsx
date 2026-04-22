import { DEFAULT_LOCALE } from "@/locale/i18n";
import { permanentRedirect } from "next/navigation";

const RootRedirectPage = () => {
  permanentRedirect(`/${DEFAULT_LOCALE}`);
};

export default RootRedirectPage;

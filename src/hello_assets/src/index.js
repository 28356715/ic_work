import { hello } from "../../declarations/hello";
import { AuthClient} from  "@dfinity/auth-client";

const authClient = await AuthClient.create();

document.getElementById("myPrincipal").innerHTML = String(
  authClient.getIdentity().getPrincipal()
);

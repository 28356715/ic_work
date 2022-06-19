import { hello } from "../../declarations/hello";
import { AuthClient} from  "@dfinity/auth-client";
import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory as walletIdl } from "../../declarations/hello";

const authClient = await AuthClient.create();
const identity = authClient.getIdentity();
const agent = new HttpAgent ({identity})
const wallet = Actor.createActor(walletIdl,{
  agent,
  canisterId:"u34oj-syaaa-aaaal-aanka-cai"
});

const proposes = await wallet.getProposes()
const canisters =await wallet.getCanisters();

document.getElementById("myPrincipal").innerHTML = String(
  authClient.getIdentity().getPrincipal()
);
document.getElementById("proposes").innerHTML = proposes

document.getElementById("canisters").innerHTML = canisters

//以下是lesson5 js


document.getElementById("createCanister").onclick = createCanister
document.getElementById("startCanister").onclick = startCanister

document.getElementById("stopCanister").onclick = stopCanister
document.getElementById("deleteCanister").onclick = deleteCanister

function createCanister(){
  await hello.create_canister()
}

function startCanister(){
  await hello.start_canister()
}
function stopCanister(){
  await hello.stop_canister()
}
function deleteCanister(){
  await hello.delete_canister()
}


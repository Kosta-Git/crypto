import { ethers } from "https://cdn.ethers.io/lib/ethers-5.2.esm.min.js";
import { abi, contractAddress } from "./constants.js";

const connectButton = document.getElementById("connect-button");
const fundButton = document.getElementById("fund-button");
const balanceButton = document.getElementById("balance-button");
const withdrawButton = document.getElementById("withdraw-button");

const connect = async () => {
  if (typeof window.ethereum !== "undefined") {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    connectButton.innerHTML = "Connected!";
    connectButton.setAttribute("disabled", "true");
  }
};

const fund = async () => {
  const ethAmount = document.getElementById("fund-input").value;
  console.log("Funding ", ethAmount, "ETH");
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      const tx = await contract.fund({ value: ethers.utils.parseEther(ethAmount) });
      await listenForTxMined(tx, provider);
      console.log("funded");
    } catch (err) {
      console.error(err);
    }
  }
};

const withdraw = async () => {
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);

    try {
      const tx = await contract.withdraw();
      await listenForTxMined(tx, provider);
    } catch (err) {
      console.error(err);
    }
  }
};

const balance = async () => {
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(contractAddress);
    balanceButton.innerHTML = "Current balance: " + ethers.utils.formatEther(balance);
  }
};

const listenForTxMined = (txResponse, provider) => {
  console.log(txResponse);
  return new Promise((resolve, reject) => {
    provider.once(txResponse.hash, () => resolve());
  });
};

connectButton.onclick = connect;
fundButton.onclick = fund;
balanceButton.onclick = balance;
withdrawButton.onclick = withdraw;
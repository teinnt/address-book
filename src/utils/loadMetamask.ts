import Web3 from 'web3'

declare global {
  interface Window {
    ethereum: any
    web3: any
  }
}

const loadMetaMask = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum)
    await window.ethereum.enable()
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider)
  } else {
    return false
  }

  return true
}

export default loadMetaMask

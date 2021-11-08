import Web3 from 'web3'

declare global {
  interface Window {
    ethereum: any
    web3: any
  }
}

const sendTransaction = async (to: string, value: number) => {
  if (!to) {
    return 'Please connect to metamask'
  }

  const account = await getAccount()
  if (!account) {
    return 'Please connect to Metamask'
  }

  const web3 = new Web3(window.web3.currentProvider)

  const balance = await web3.eth.getBalance(account)
  const weiValue = web3.utils.toWei(value.toString())

  if (Number(balance) < value) {
    return 'Your balance is not enough!'
  }

  const result = await window.ethereum.request({
    method: 'eth_sendTransaction',
    params: [
      {
        to,
        value: `${web3.utils.toHex(weiValue)}`,
        from: account,
      },
    ],
  })

  if (typeof result === 'string' || result instanceof String) {
    return ''
  }

  return 'Cannot process the transaction.'
}

const getAccount = async () => (await window.ethereum.request({ method: 'eth_requestAccounts' }))[0]

export { getAccount, sendTransaction }

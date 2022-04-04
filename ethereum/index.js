const { ethers } = require("ethers")

const provider = new ethers.providers.JsonRpcProvider(
  "https://kovan.infura.io/v3/0f00063055b44cd8b6e7ab9a368e227f"
)

const account1 = "0xeC520D605b38b17E44a28f8407fb06D81e74D6d7"
const account2 = "0x5bE4a197439F831cB360BaEA91afFeCb3F685dE8"

const privateKey1 =
  "a285e2a47c6de4d0ace7c6884c91e143104e711e6d40ed8c445159904c88467c" // Sender privateKey1
const wallet = new ethers.Wallet(privateKey1, provider)

const main = async () => {
  // Show account 1 before transfer
  const senderBalanceBefore = await provider.getBalance(account1)
  // Show account 2 before transfer
  const recieverBalanceBefore = await provider.getBalance(account2)

  console.log(
    `\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)} `
  )
  console.log(
    `\nReciever balance before: ${ethers.utils.formatEther(
      recieverBalanceBefore
    )}\n`
  )

  const tx = await wallet.sendTransaction({
    to: account2,
    value: ethers.utils.parseEther("0.00025"),
  })
  // fetch transaction

  await tx.wait()
  console.log(tx)
  // Show account 1 after transfer
  // Show account 2 after transfer
  const senderBalanceAfter = await provider.getBalance(account1)
  const recieverBalanceAfter = await provider.getBalance(account2)

  console.log(
    `\nSender balance after: ${ethers.utils.formatEther(
      senderBalanceAfter
    )} ``\nReciever balance after: ${ethers.utils.formatEther(
      recieverBalanceAfter
    )}\n`
  )
}

main()

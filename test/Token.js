const { expect } = require("chai");

describe("Token contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("Token");

    const hardhatToken = await Token.deploy();

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });
});


//A Signer in Ethers.js is an object that represents an Ethereum account. 
//It's used to send transactions to contracts and other accounts. 
//Here we're getting a list of the accounts in the node we're connected to, 
//which in this case is Hardhat Network, and only keeping the first and second ones.

//LINK: https://hardhat.org/guides/waffle-testing.html